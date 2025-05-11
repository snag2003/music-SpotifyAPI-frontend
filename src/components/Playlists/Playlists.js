import MediaList from "../MediaList/MediaList";
import React from "react";
import Header from "../Header/Header";
function Playlists(props) {
  return (
    <>
      <Header onLogout={props.handleLogout} />
      <MediaList title={"Your Playlists"} mediaItems={props.playlists} />
    </>
  );
}

export default Playlists;
