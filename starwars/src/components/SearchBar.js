import React from "react";
import styled from "styled-components";

const SearchForm = styled.form`
    width: 90%;
    margin-bottom: 32px;
`;

const SearchFormLabel = styled.label`
    font-family: "OpenSans";
    font-size: 1.6rem;
    margin-right: 24px;
`;

const SearchFormInput = styled.input`
    font-family: "OpenSans";
    font-size: 1.4rem; 
    background-color: rgb(255,255,255,.7);
    border: 0;
    border-bottom: 3px solid #C34E1C;
    border-left: 3px solid #C34E1C;
    padding: 10px 6px;
    width: 300px;
`;

const SearchBar = props => {
    //console.log("Search bar props", props);
    return (
        <SearchForm>
            <SearchFormLabel>Find a Character:</SearchFormLabel>
            <SearchFormInput
            type="text"
            placeholder="Search"
            value={props.searchTerm}
            onChange={props.handleChange}
            />
        </SearchForm>
    );
}

export default SearchBar;