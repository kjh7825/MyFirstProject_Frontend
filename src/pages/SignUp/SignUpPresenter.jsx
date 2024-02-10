import React, {forwardRef} from 'react';
import * as Layouts from "./Items/Layouts";
import * as Items from "./Items/Items"
import SignInput from "../../components/SignInput/SignInput";

const SignUpPresenter = forwardRef((props, ref) => {
        return (
            <Layouts.Layout>
                <Layouts.LoginForm name={"login"} onSubmit={props.requestLogin}>
                    <Items.HeaderText>회원가입</Items.HeaderText>
                        <Items.Text>아이디&nbsp;{props.IdValidation()? "" : <span>영문자, 숫자로 이루어진 7~12자의 아이디를 입력해주세요.</span>}</Items.Text>
                        <SignInput
                            usage={"id"}
                            ref={ref}
                            userData={props.userId}
                            setUserData={props.setUserId}
                            Validation={props.IdValidation}
                        />
                    <Items.Text>비밀번호&nbsp;{props.PwValidation() ? "" :<span>영문자, 숫자, 특수기호(!,@,#,$,%,^,&,*)로 8~14자의 비밀번호를 입력해주세요.</span>}</Items.Text>
                    <SignInput
                        usage={"pw"}
                        userData={props.userPw} setUserData={props.setUserPw}
                        Validation={props.PwValidation}
                    />
                    <Items.Text>비밀번호 확인</Items.Text>
                    <SignInput
                        usage={"pw"}
                        userData={props.userPw} setUserData={props.setUserPw}
                        Validation={props.PwValidation}
                    />
                    <Layouts.RowWrapper>
                        <Items.Text>계정 유형</Items.Text>
                        <label htmlFor={"Life"}>
                            <Items.RadioInput name={"login"} id={"Life"} type={"radio"} value={"life"} onChange={props.onChangeRatio}/>
                            &nbsp;life
                        </label>
                        <label htmlFor={"Workplace"}>
                            <Items.RadioInput name={"login"} id={"Workplace"} type={"radio"} value={"workplace"} onChange={props.onChangeRatio}/>
                            &nbsp;Workplace
                        </label>
                    </Layouts.RowWrapper>

                    <Layouts.RowWrapper>
                        <Items.Text>전화번호</Items.Text>
                        <Items.PhoneInput onBlur={props.onBlurPhone} onChange={props.onChangePhone} type={"tel"} maxLength={3} id={"firstNum"}/> -
                        <Items.PhoneInput onBlur={props.onBlurPhone} onChange={props.onChangePhone} type={"tel"} maxLength={4} id={"middleNum"}/> -
                        <Items.PhoneInput onBlur={props.onBlurPhone} onChange={props.onChangePhone} type={"tel"} maxLength={4} id={"lastNum"}/>
                    </Layouts.RowWrapper>
                    <Items.SubmitBtn type={"submit"}>계정 생성</Items.SubmitBtn>
                </Layouts.LoginForm>
            </Layouts.Layout>
        );
    }
);

SignUpPresenter.displayName = "SignInPresenter";
export default SignUpPresenter;