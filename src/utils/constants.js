const CLIENT_ID = "24c30ca667a44b97a27471efb6613a63";
const CLIENT_SECRET = "64bf977c9d7d4a4f9f3a327bb3708e76";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/home";
const SPACE_DELIMITER = "%20";
const SCOPES = [
  "user-top-read",
  "user-read-private",
  "user-library-read",
  "playlist-read-private",
];

const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";
const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists?limit=10";
const TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?limit=10";
const ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?limit=10";

const SEARCH_ENDPOINT =
  "https://api.spotify.com/v1/search?&type=album&limit=10&q=";

const ENDPOINT = "https://api.spotify.com/v1";

module.exports = {
  CLIENT_ID,
  CLIENT_SECRET,
  SPOTIFY_AUTHORIZE_ENDPOINT,
  REDIRECT_URL_AFTER_LOGIN,
  SCOPES_URL_PARAM,
  PROFILE_ENDPOINT,
  PLAYLISTS_ENDPOINT,
  TRACKS_ENDPOINT,
  ARTISTS_ENDPOINT,
  SEARCH_ENDPOINT,
  ENDPOINT,
};
