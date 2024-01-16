import React from "react";

function SearchForm(props) {
  const handleClear = (e) => {
    e.preventDefault();
    props.clearSearch();
    props.setSearchKey("");
  };

  return (
    <div className="search-form">
      <h2 className="search-form__title">Busca tus albums favoritos</h2>
      <form
        className="search-form__form"
        onSubmit={(e) => props.searchAlbums(e)}
      >
        <input
          className="search-form__input"
          type="text"
          placeholder="Escribe tus albumes favs..."
          value={props.searchKey}
          onChange={(e) => props.setSearchKey(e.target.value)}
        />
        <button className="search-form__button" type={"submit"}>
          Buscar
        </button>
        <button
          className="search-form__button"
          onClick={handleClear}
          type={"button"}
        >
          Clear
        </button>
      </form>
      {props.loading && <div className="circle-preloader" />}
    </div>
  );
}

export default SearchForm;
