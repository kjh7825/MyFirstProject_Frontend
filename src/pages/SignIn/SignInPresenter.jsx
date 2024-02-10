import React from 'react';
import * as Layouts from "./Items/Layouts";
import SignInput from "../../components/SignInput/SignInput";


const SignInPresenter = (props) => {
    return (
        <Layouts.Layout>
            <Layouts.LoginForm>
                <SignInput
                    usage={"id"}
                    userData={props.userId} setUserData={props.setUserId}
                    Validation={props.IdValidation}
                />
                <SignInput
                    usage={"pw"}
                    userData={props.userPw} setUserData={props.setUserPw}
                    Validation={props.PwValidation}
                />
            </Layouts.LoginForm>
        </Layouts.Layout>
    );
};

export default SignInPresenter;