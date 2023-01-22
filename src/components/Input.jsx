import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_MOVIE_NAME } from "../redux/constant/selectConstant";

const Input = () => {

  const [searchValue, setSearchValue] = useState("")
  const movies = useSelector((state) => state.select.movies)
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    if (e.keyCode === 13) {
      handleSearch()
    }
  }

  const handleSearch = () => {
    dispatch({ type: SEARCH_MOVIE_NAME, payload: { value: searchValue } })
  }

  return (
    <div>
      <InputGroup className="mb-3 mt-2">
        <Form.Control
          placeholder="Search movie..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyUp={handleSearchInput}
        />
        <Button variant="btn btn-secondary" id="button-addon2" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default Input;
