import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MediaList from "../MediaList/MediaList";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import Header from "../Header/Header";
function Search(props) {
  const renderSearchResults = () => {
    // Show "No se ha encontrado nada" message if there are no results
    if (props.showNoResults) {
      return <p className="search__error">No se ha encontrado nada</p>;
    }

    // Show the MediaList component if there are results
    return (
      <MediaList title={"Resultados de Albums:"} mediaItems={props.albums} />
    );
  };

  return (
    <div className="search__container">
      <Header onLogout={props.handleLogout} />
      <SearchForm
        searchKey={props.searchKey}
        setSearchKey={props.setSearchKey}
        searchAlbums={props.searchAlbums}
        clearSearch={props.clearSearch}
        loading={props.loading}
      />

      {renderSearchResults()}

      {props.error && (
        <ErrorPopup
          message={props.error.message}
          onClose={props.closeErrorPopup}
        />
      )}
    </div>
  );
}

export default Search;
