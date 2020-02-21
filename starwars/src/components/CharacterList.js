import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const CharacterSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const CharacterList = () => {

    // set data state
    const [characters, setCharacters] = useState([]);

    //set search bar state 
    const [searchTerm, setSearchTerm] = useState("");

    // search bar event
    const handleChange = event => {
        const queryString = event.target.value;
        setSearchTerm(queryString);
    }


    // axios call & useEffect hook
    useEffect(() => {
        axios.get("https://swapi.co/api/people/", {
            params: {
                search: searchTerm
            }
        })
        .then(response => {
            //console.log(response.data.results);
            setCharacters(response.data.results);
        })
        .catch(error => {
            console.log("Error fetching data", error);
        })
    }, [searchTerm]);


    return (
        <CharacterSection>
            <SearchBar searchTerm={searchTerm} handleChange={handleChange}/>
            {/* Map thru data here and set up card for each character from API */}
            {characters.map(character => {
                return (
                    <CharacterCard 
                        name={character.name}
                        birthYear={character.birth_year}
                        gender={character.gender}
                        height={character.height} 
                        mass={character.mass}
                        id={character.url}
                    />
                )
            })}
        </CharacterSection>
    );
}

export default CharacterList;