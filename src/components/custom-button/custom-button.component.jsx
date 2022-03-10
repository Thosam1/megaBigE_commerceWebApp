import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

/* Stateless
    will triger form 
*/
const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;





