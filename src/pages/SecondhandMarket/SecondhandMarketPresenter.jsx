import React from 'react';
import * as Layouts from "../DailyLog/Items/Layouts";
import * as Items from "../DailyLog/Items/Items";
import {GridLayout} from "../DailyLog/Items/Layouts";
import Card from "../../components/Card/Card";
import BaseLayout from "../../components/Layout/BaseLayout";

const SecondhandMarketPresenter = () => {
    return (
        <BaseLayout>
            <Layouts.Layout>
                <Items.HeaderText>필요는 없지만 버리긴 아까운 물건을 거래해봐요!</Items.HeaderText>
                <GridLayout>
                    <Card /><Card /><Card /><Card /><Card /><Card /><Card />
                </GridLayout>
            </Layouts.Layout>
        </BaseLayout>
    );
};

export default SecondhandMarketPresenter;