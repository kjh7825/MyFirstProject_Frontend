import React from 'react';
import SignInputContainer from "./SignInputContainer";

const SignInput = (props) => {
    return (
        <SignInputContainer
            usage={props.usage}
            userData={props.userId} setUserData={props.setUserData}
            Validation={props.Validation}
        />
    );
};

export default SignInput;