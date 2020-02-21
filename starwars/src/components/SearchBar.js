import React from "react";
import styled from "styled-components";

const SearchForm = styled.form`
    width: 90%;
    margin-bottom: 48px;
`;

const SearchFormLabel = styled.label`
    font-family: "OpenSans";
    font-size: 1.4rem;
    color: #FAFAFA;
    padding: 9px 24px 11px;
    border-radius: 3px;
    background-color: #C34E1C;
    text-transform: uppercase;
    letter-spacing: 0.1em;
`;

const SearchFormInput = styled.input`
    font-family: "OpenSans";
    font-size: 1.4rem; 
    background-color: rgb(255,255,255,.8);
    border: 0;
    border-radius: 3px;
    padding: 10px 12px;
    width: 300px;
`;

const SearchBar = props => {
    //console.log("Search bar props", props);
    return (
        <SearchForm>
            <SearchFormLabel>Find a Character</SearchFormLabel>
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