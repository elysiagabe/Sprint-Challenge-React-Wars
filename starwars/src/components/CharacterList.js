import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {

    // set state
    const [characters, setCharacters] = useState([]);

    // axios call & useEffect hook
    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            console.log(response.data.results);
            setCharacters(response.data.results);
        })
        .catch(error => {
            console.log("Error fetching data", error);
        })
    }, []);

    return (
        <section>
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
        </section>
    );
}

export default CharacterList;