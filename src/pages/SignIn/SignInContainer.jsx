import React, { useEffect, useRef, useState } from 'react';
import SignInPresenter from "./SignInPresenter";

const SignInContainer = () => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userRole, setUserRole] = useState("");
    const idInputRef = useRef(null);

    useEffect(() => {
        if (idInputRef.current) {
            idInputRef.current.focus();
        }
    }, []);

    const IdValidation = () => {
        const regex = /^[a-zA-Z0-9]{7,12}$/;
        return regex.test(userId);
    };

    const PwValidation = () => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,14}$/;
        return regex.test(userPw);
    };

    const onChangeRatio = (e) => {
        setUserRole(e.target.value);
    };

    const requestLogin = (e) => {
        e.preventDefault();
        if (!userId || !IdValidation()) {
            alert("아이디를 확인해주세요.");
            return;
        }
        if (!userPw || !PwValidation()) {
            alert("비밀번호를 확인해주세요.");
            return;
        }
        if (!userRole) {
            alert("계정 유형을 선택해주세요.");
            return;
        }
        console.log("유효성 체크 완료, 로그인 요청 로직을 여기에 구현.");
    };

    return (
        <SignInPresenter
            ref={idInputRef}
            userId={userId}
            userPw={userPw}
            userRole={userRole}
            setUserId={setUserId}
            setUserPw={setUserPw}
            setUserRole={setUserRole}
            IdValidation={IdValidation}
            PwValidation={PwValidation}
            requestLogin={requestLogin}
            onChangeRatio={onChangeRatio}
        />
    );
};

export default SignInContainer;
