import MediaList from "../MediaList/MediaList";
import React from "react";
import Header from "../Header/Header";
function TopSongs(props) {
  return (
    <>
      <Header onLogout={props.handleLogout} />
      <MediaList title={"Top Songs"} mediaItems={props.tracks} />
    </>
  );
}

export default TopSongs;
