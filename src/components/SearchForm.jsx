import React, { useState } from "react";
import { useGlobalContext } from "../context/Context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements;

    if (!inputValue["search"].value) return;
    else {
      setSearchTerm(inputValue["search"].value);
      inputValue["search"].value = "";
    }
  };
  return (
    <section>
      <h1 className="title">Unsplash Image</h1>
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;

// Create a form with an input and a submit button.
//  The input should have the following attributes:
//  type='text', name='search', placeholder='cat',
//  and className='form-input search-input'. When the user submits
//  the form, access (for now log)the input value.
