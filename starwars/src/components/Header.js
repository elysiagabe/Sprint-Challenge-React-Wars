import React from "react";
import styled from "styled-components";

const ReactWarsTitle = styled.h1`
    font-family: "Audiowide";
    font-size: 4.8rem;
    color: #FAFAFA;
    text-shadow: 4px 3px #C34E1C;
    margin: 32px;
`;

const Header = () => {
    return(
        <header>
            <ReactWarsTitle>React Wars</ReactWarsTitle>
        </header>
    )
}

export default Header;