import React from "react";

const CharacterCard = props => {
    console.log("CharacterCard props:", props);
    return (
        <div key={props.id}>
            <h2>Name: {props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>Birth Year: {props.birthYear}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </div>
    );
}

export default CharacterCard;