import React from 'react';
import * as Layouts from "./Items/Layouts";
import * as Items from "./Items/Items";

const HeaderPresenter = () => {
    return (
        <Layouts.Layout>
            <Layouts.RowWrapper>
                <Items.ProfileImg src={"./images/cat.jpeg"}/>
                <Layouts.ColumnWrapper>
                    <Items.BaseText style={{color : '#b2a099'}}>강정현님!</Items.BaseText>
                    <Items.BaseText>오늘도 좋은 하루 되세요!</Items.BaseText>
                </Layouts.ColumnWrapper>
            </Layouts.RowWrapper>
            <Layouts.RowWrapper>
                <Items.Menu to={"/DailyLog"}>Daily Log</Items.Menu>
                <Items.Menu to={"/SecondHandMarket"}>Market</Items.Menu>
            </Layouts.RowWrapper>
            <Layouts.RowWrapper>
                <Layouts.SignWrapper>
                    <Items.SignBtn to={"/signIn"}>로그인</Items.SignBtn>
                    <Items.SignBtn to={"/signUp"}>회원가입</Items.SignBtn>
                </Layouts.SignWrapper>
            </Layouts.RowWrapper>
        </Layouts.Layout>
    );
};

export default HeaderPresenter;