import React, {useState} from 'react';
import SignInPresenter from "./SignInPresenter";

const SignInContainer = () => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userRole, setUserRole] = useState("");

    const IdValidation = () => {
        const regex = /^[a-zA-Z0-9]{7,12}$/;
        return regex.test(userId);
    }
    const PwValidation = () => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,14}$/;
        return regex.test(userPw);
    }

    return (
        <SignInPresenter
            userId={userId} userPw={userPw} userRole={userRole}
            setUserId={setUserId} setUserPw={setUserPw} setUserRole={setUserRole}
            IdValidation={IdValidation} PwValidation={PwValidation}
        />
    );
};

export default SignInContainer;