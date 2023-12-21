import React, { useState } from "react";

function MediaList(props) {
  const [visibleItems, setVisibleItems] = useState(3);

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  const handleShowLess = () => {
    setVisibleItems((prevVisibleItems) => Math.max(prevVisibleItems - 3, 3));
  };

  return (
    <div className="medialist">
      {props.mediaItems.items && (
        <>
          <h3 className="medialist__title">{props.title}</h3>
          <ul className="medialist__container">
            {Array.isArray(props.mediaItems.items) &&
              props.mediaItems.items
                .slice(0, visibleItems)
                .map((mediaItem, index) => (
                  <li key={index} className="medialist__element">
                    <img
                      className="medialist__element__img"
                      src={
                        mediaItem.album
                          ? mediaItem.album.images[0].url
                          : mediaItem.images[0].url
                      }
                      alt="media img"
                    />
                    <h4 className="medialist__element__title">
                      {mediaItem.name}
                    </h4>
                    <p className="medialist__element__subtitle">
                      {mediaItem.artists
                        ? mediaItem.artists[0].name
                        : mediaItem.description || ""}
                    </p>
                    <button
                      className="medialist__element__button"
                      onClick={() =>
                        window.open(mediaItem.external_urls.spotify)
                      }
                    >
                      Ir a Spotify
                    </button>
                  </li>
                ))}
          </ul>
          <div className="medialist__show-button-container">
            {visibleItems < (9 || props.mediaItems.items.length) && (
              <button
                className="medialist__show-button"
                onClick={handleShowMore}
              >
                Mostrar más
              </button>
            )}
            {visibleItems > 3 && (
              <button
                className="medialist__show-button"
                onClick={handleShowLess}
              >
                Mostrar menos
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MediaList;
