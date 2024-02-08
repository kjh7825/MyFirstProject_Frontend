import React from 'react';
import * as Layouts from "./Items/Layouts";
import * as Items from "./Items/Items";
import {Cascader} from "antd";
import {DoubleLeftOutlined, HomeFilled} from "@ant-design/icons";

const ControlBarPresenter = (props) => {
    const toTopStyle = {
        fontSize : '25px',
        cursor: 'pointer',
        fontWeight : 'bold',
        transform: 'rotate(90deg)',
        color : '#b2a099'
    }
    const toHomeStyle = {
        fontSize : '25px',
        cursor: 'pointer',
        fontWeight : 'bold',
        color : '#b2a099'
    }

    return (
        <Layouts.Layout onSubmit={props.onSearchHandler}>
                <Items.InputBox onChange={props.onChangeHandler}/>
                <Cascader style={{width: '40%',}} options={props.options} onChange={props.onChangeLocate} placeholder="지역을 선택해주세요" />
                <Items.SearchBtn>검색하기</Items.SearchBtn>
                <DoubleLeftOutlined style={toTopStyle} onClick={props.toTop}/>
                <HomeFilled style={toHomeStyle} onClick={props.toHome} />
        </Layouts.Layout>
    );
};

export default ControlBarPresenter;