import React from "react";
import styled from "styled-components";

const Card = styled.div`
    margin-bottom: 32px;
    padding: 20px;
    background-color: rgb(17, 10, 12, .65); 
    width: 28%;
    color: #FAFAFA;
    display: flex;
    flex-direction: column;
`;

const CharacterName = styled.h2`
    font-family: "Audiowide";
    font-size: 2rem;
    padding-bottom: 12px;
`;

const CharacterDetails = styled.p`
    font-family: "OpenSans";
    font-size: 1.6rem;
    line-height: 1.8;
    text-transform: capitalize;
`;

const CharacterCard = props => {
    //console.log("CharacterCard props:", props);
    return (
        <Card key={props.id}>
            <CharacterName>{props.name.toUpperCase()}</CharacterName>
            <CharacterDetails>Gender: {props.gender}</CharacterDetails>
            <CharacterDetails>Birth Year: {props.birthYear}</CharacterDetails>
            <CharacterDetails>Height: {props.height}</CharacterDetails>
            <CharacterDetails>Mass: {props.mass}</CharacterDetails>
        </Card>
    );
}

export default CharacterCard;

