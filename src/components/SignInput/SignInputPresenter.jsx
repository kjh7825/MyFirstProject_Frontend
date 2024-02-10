import React from 'react';
import * as Layouts from "./Item/Layouts";
import * as Items from "./Item/Items";

const SignInputPresenter = (props) => {
    return (
        <Layouts.Layout>
            <Items.Input
                onFocus={props.onFocusHandler}
                onBlur={props.onBlurHandler}
                onChange={props.onChangeHandler}
                color={props.color}
            />
            <Items.Message style={props.inputStyle}>{props.message || "개발자님, 메세지가 비어있습니다!"}</Items.Message>
        </Layouts.Layout>
    );
};

export default SignInputPresenter;