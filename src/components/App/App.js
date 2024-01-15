import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Login/Login";
import TopArtists from "../TopArtists/TopArtists";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import About from "../About/About";
import {
  getProfileData,
  getPlaylistsData,
  getTracksData,
  getArtistsData,
  searchAlbums,
} from "../../utils/SpotifyApi";
import TopSongs from "../TopSongs/TopSongs";
import Playlists from "../Playlists/Playlists";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import Footer from "../Footer/Footer";

function App() {
  const [token, setToken] = useState("");

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [showNoResults, setShowNoResults] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hash = window.location.hash;
        if (hash) {
          const tokens = getParamsFromHash(hash);
          localStorage.setItem("token", tokens.access_token);
          setToken(tokens.access_token);
          window.history.pushState({}, null, "/home");
        } else {
          setToken(localStorage.getItem("token"));
        }

        if (!token) {
          setLoading(false);
          return;
        }

        const [profileData, playlistsData, tracksData, artistsData] =
          await Promise.all([
            getProfileData(),
            getPlaylistsData(),
            getTracksData(),
            getArtistsData(),
          ]);

        setProfile(profileData);
        setPlaylists(playlistsData);
        setTracks(tracksData);
        setArtists(artistsData);
        setAlbums([]);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError({
          message: "Un error ha ocurrido. Por favor intentalo más tarde.",
        });
      }
    };

    fetchData();
  }, [token]);
  const getParamsFromHash = (hash) => {
    const hashContent = hash.substr(1);
    const paramsSplit = hashContent.split("&");
    let params = {};
    let values = [];
    paramsSplit.forEach((param) => {
      values = param.split("=");
      params[values[0]] = values[1];
    });
    return params;
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await searchAlbums(searchKey);
      setAlbums(data.albums);
      setShowNoResults(data.albums.length === 0);
    } catch (error) {
      console.error("Error buscando albums:", error);
      setError(error);
      setShowNoResults(true);
    }
  };

  const clearSearch = () => {
    setAlbums([]);
    setSearchKey("");
    setShowNoResults(false);
  };

  const closeErrorPopup = () => {
    setError(null);
  };

  return (
    <Router>
      <div className="App">
        <div className="page">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route
              exact
              path="/home"
              render={(props) => (
                <Main
                  {...props}
                  loading={loading}
                  handleLogout={handleLogout}
                  profile={profile}
                />
              )}
            />
            <Route
              exact
              path="/search"
              render={(props) => (
                <Search
                  {...props}
                  searchKey={searchKey}
                  setSearchKey={setSearchKey}
                  searchAlbums={handleSearch}
                  clearSearch={clearSearch}
                  albums={albums}
                  loading={loading}
                  handleLogout={handleLogout}
                  showNoResults={showNoResults}
                />
              )}
            />
            <Route
              exact
              path="/top-artists"
              render={(props) => (
                <TopArtists
                  {...props}
                  artists={artists}
                  handleLogout={handleLogout}
                />
              )}
            />
            <Route
              exact
              path="/top-songs"
              render={(props) => (
                <TopSongs
                  {...props}
                  tracks={tracks}
                  handleLogout={handleLogout}
                />
              )}
            />
            <Route
              exact
              path="/your-playlists"
              render={(props) => (
                <Playlists
                  {...props}
                  playlists={playlists}
                  handleLogout={handleLogout}
                />
              )}
            />
            <Route
              exact
              path="/about-creator"
              render={(props) => (
                <About {...props} handleLogout={handleLogout} />
              )}
            />
          </Switch>
          {token && <Footer />}
          {error && (
            <ErrorPopup message={error.message} onClose={closeErrorPopup} />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
