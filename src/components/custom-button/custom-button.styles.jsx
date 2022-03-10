import styled, { css } from "styled-components";

// WHAT IS SPECIFIC

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

// SPECIFY AND CHOOSE
const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

// main style - WHAT IS COMMON
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  /* background-color: black;
  color: white; */
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  /* border: none; */
  cursor: pointer;
  display: flex; // for text 
  justify-content: center; // for text to always be aligned
  
  ${getButtonStyles} // function for nesting !!! -> depends on props received
`;



