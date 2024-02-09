import React from 'react';
import * as Layouts from "./Items/Layouts";
import * as Items from "./Items/Items";
import Card from "../../components/Card/Card";
import BaseLayout from "../../components/Layout/BaseLayout";
import {StarFilled, ThunderboltFilled} from "@ant-design/icons";

const DailyLogPresenter = (props) => {
    return (
        <BaseLayout>
            <Layouts.RowWrapper>
                <Items.LoadData isActive={props.category==="최신"} onClick={() => {props.setCategory("최신")}}>
                    <ThunderboltFilled />최신
                </Items.LoadData>
                <Items.LoadData isActive={props.category==="인기"} onClick={() => {props.setCategory("인기")}}>
                    <StarFilled />인기
                </Items.LoadData>
            </Layouts.RowWrapper>
            <Layouts.Layout>
                <Layouts.GridLayout>
                    <Card /><Card /><Card /><Card /><Card /><Card /><Card />
                </Layouts.GridLayout>
            </Layouts.Layout>
        </BaseLayout>
    );
};

export default DailyLogPresenter;