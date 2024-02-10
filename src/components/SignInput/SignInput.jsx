import React, { forwardRef } from 'react';
import SignInputContainer from "./SignInputContainer";


const SignInput = forwardRef((props, ref) => {
    return (
        <SignInputContainer
            {...props}
            ref={ref}
        />
    );
});
SignInput.displayName = "SignInput";
export default SignInput;
