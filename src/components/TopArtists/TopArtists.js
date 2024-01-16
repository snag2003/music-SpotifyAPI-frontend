import MediaList from "../MediaList/MediaList";
import React from "react";
import Header from "../Header/Header";
function TopArtists(props) {
  return (
    <>
      <Header onLogout={props.handleLogout} />
      <MediaList title={"Top Artistas"} mediaItems={props.artists} />
    </>
  );
}

export default TopArtists;
