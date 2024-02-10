import React, {forwardRef} from 'react';
import * as Layouts from "./Items/Layouts";
import * as Items from "./Items/Items";
import SignInput from "../../components/SignInput/SignInput";
import {Link} from "react-router-dom";

const SignInPresenter = forwardRef((props, ref) => {
        return (
            <Layouts.Layout>
                <Layouts.LoginForm name={"login"} onSubmit={props.requestLogin}>
                    <Items.HeaderText>로그인</Items.HeaderText>
                    <SignInput
                        usage={"id"}
                        ref={ref}
                        userData={props.userId}
                        setUserData={props.setUserId}
                        Validation={props.IdValidation}
                    />
                    <SignInput
                        usage={"pw"}
                        userData={props.userPw} setUserData={props.setUserPw}
                        Validation={props.PwValidation}
                    />
                    <Layouts.RowWrapper>
                        <label htmlFor={"Life"}>
                            <Items.RadioInput name={"login"} id={"Life"} type={"radio"} value={"life"} onChange={props.onChangeRatio}/>
                            &nbsp;life
                        </label>
                        <label htmlFor={"Workplace"}>
                            <Items.RadioInput name={"login"} id={"Workplace"} type={"radio"} value={"workplace"} onChange={props.onChangeRatio}/>
                            &nbsp;Workplace
                        </label>
                    </Layouts.RowWrapper>
                    <Items.SubmitBtn type={"submit"}>로그인하기</Items.SubmitBtn>
                    <div>아직 계정이 없으신가요? <Link to={"../signup"}>회원가입</Link></div>
                </Layouts.LoginForm>
            </Layouts.Layout>
        );
    }
);

SignInPresenter.displayName = "SignInPresenter";

export default SignInPresenter;