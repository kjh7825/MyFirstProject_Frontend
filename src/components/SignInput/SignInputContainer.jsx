import React, {forwardRef, useEffect, useState} from 'react';
import SignInputPresenter from "./SignInputPresenter";

const SignInputContainer = forwardRef((props, ref) => {
    // 포커스 스타일은 입력 전, 입력 중, 입력 완료, 경고 총 4가지가 있다.
    // 입력전 : "standby", 입력중 : "typing", 입력 완료 : "ok", 경고 : "warning"

    const standbyStyle = {
        fontSize:"16px",
        color:"#aaa",
        top:"50%",
    }
    const typingStyle = {
        fontSize:"12px",
        color:"dodgerblue",
        top:"0",
    }
    const okStyle = {
        fontSize:"12px",
        color:"green",
        top:"0",
    }
    const warningStyle = {
        fontSize:"12px",
        color:"red",
        top:"0",
    }

    const [inputStyle, setInputStyle] = useState(standbyStyle)
    const [message, setMessage] = useState("")
    const [color, setColor] = useState("#aaa")

    useEffect(() => {
        if(props.usage === "id") setMessage("아이디를 입력해주세요.")
        if(props.usage === "pw") setMessage("비밀번호를 입력해주세요.")
    }, []);
    const onChangeHandler = (e) => {
        props.setUserData(e.target.value)
        setColor("dodgerblue")
        if(props.usage === "id") setMessage("아이디를 입력해주세요.")
        if(props.usage === "pw") setMessage("비밀번호를 입력해주세요.")
    }
    const onBlurHandler = (e) => {
        if(e.target.value==="") {
            setInputStyle(standbyStyle)
            setColor("#aaa")
            if(props.usage === "id") setMessage("아이디를 입력해주세요.")
            if(props.usage === "pw") setMessage("비밀번호를 입력해주세요.")
            return
        }
        if(props.Validation(props.userData)) {
            setInputStyle(okStyle)
            setColor("green")
            if(props.usage === "id")  setMessage("멋진 아이디네요!")
            if(props.usage === "pw")  setMessage("멋진 패스워드네요!")
        }
        else {
            setInputStyle(warningStyle)
            setColor("red")
            if(props.usage === "id")  setMessage("아이디 조건과 달라요!")
            if(props.usage === "pw")  setMessage("패스워드 조건과 달라요!")
        }
    }
    const onFocusHandler = () => {
        setInputStyle(typingStyle)
        setColor("dodgerblue")
        if(props.usage === "id") setMessage("아이디를 입력해주세요.")
        if(props.usage === "pw") setMessage("비밀번호를 입력해주세요.")
    }

    return (
        <SignInputPresenter
            message={message}
            setUserData={props.setUserData}
            onFocusHandler={onFocusHandler}
            onChangeHandler={onChangeHandler}
            onBlurHandler={onBlurHandler}
            inputStyle={inputStyle}
            color={color}
            ref={ref}
            usage={props.usage}
        />
    );
});
SignInputContainer.displayName = "SignInputContainer";
export default SignInputContainer;