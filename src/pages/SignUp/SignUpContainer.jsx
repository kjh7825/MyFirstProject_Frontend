import React, {useEffect, useRef, useState} from 'react';
import SignUpPresenter from "./SignUpPresenter";

const SignUpContainer = () => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userRole, setUserRole] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const idInputRef = useRef(null);

    const [userFirstPhone, setUserFirstPhone] = useState("");
    const [userMiddlePhone, setUserMiddlePhone] = useState("");
    const [userLastPhone, setUserLastPhone] = useState("");

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

    const onChangePhone = (e) => {
        if(e.target.id==="firstNum") {
            setUserFirstPhone(e.target.value)
            return
        }
        if(e.target.id==="middleNum") {
            setUserMiddlePhone(e.target.value)
            return
        }
        if(e.target.id==="lastNum") {
            setUserLastPhone(e.target.value)
            return
        }
        if(userFirstPhone && userMiddlePhone && userLastPhone) {
            const pn = userFirstPhone + userMiddlePhone + userLastPhone
            console.log(pn)
            setUserPhone(pn)
        }
    }
    const onBlurPhone = () => {
        if(userFirstPhone && userMiddlePhone && userLastPhone) {
            const pn = userFirstPhone + userMiddlePhone + userLastPhone
            console.log(pn)
            setUserPhone(pn)
        }
    }

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
        // console.log("유효성 체크 완료, 로그인 요청 로직을 여기에 구현.");
        console.log(userPhone)
    };

    return (
        <SignUpPresenter
            ref={idInputRef}
            userId={userId}
            userPw={userPw}
            userPhone={userPhone}
            userRole={userRole}
            setUserId={setUserId}
            setUserPw={setUserPw}
            setUserRole={setUserRole}
            setUserPhone={setUserPhone}
            IdValidation={IdValidation}
            PwValidation={PwValidation}
            requestLogin={requestLogin}
            onChangeRatio={onChangeRatio}
            onChangePhone={onChangePhone}
            onBlurPhone={onBlurPhone}
        />
    );
};

export default SignUpContainer;