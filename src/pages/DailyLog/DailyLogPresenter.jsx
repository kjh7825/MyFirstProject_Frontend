import React from 'react';
import * as Layouts from "./Items/Layouts";
import * as Items from "./Items/Items";
import {GridLayout} from "./Items/Layouts";
import Card from "../../components/Card/Card";
import BaseLayout from "../../components/Layout/BaseLayout";

const DailyLogPresenter = () => {
    return (
        <BaseLayout>
            <Layouts.Layout>
                <Items.HeaderText>일상을 공유해요!</Items.HeaderText>
                <GridLayout>
                    <Card /><Card /><Card /><Card /><Card /><Card /><Card />
                </GridLayout>
            </Layouts.Layout>
        </BaseLayout>
    );
};

export default DailyLogPresenter;