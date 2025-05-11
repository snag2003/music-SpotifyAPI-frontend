import React from "react";

function SearchForm(props) {
  const handleClear = (e) => {
    e.preventDefault();
    props.clearSearch();
    props.setSearchKey("");
  };

  return (
    <div className="search-form">
      <h2 className="search-form__title">Search your favorite album</h2>
      <form
        className="search-form__form"
        onSubmit={(e) => props.searchAlbums(e)}
      >
        <input
          className="search-form__input"
          type="text"
          placeholder="Search your fav albums..."
          value={props.searchKey}
          onChange={(e) => props.setSearchKey(e.target.value)}
        />
        <button className="search-form__button" type={"submit"}>
          Search
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
