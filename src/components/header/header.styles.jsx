import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';


// css is when we need a code more than once -> We can include them directly ${OptionContainerStyles}
const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between; // for children within
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)` // Writing styled() to extend !!!
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%; // of full header 
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end; // to be on the most right side of the header
`

export const OptionLink = styled(Link).div`
    ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`


