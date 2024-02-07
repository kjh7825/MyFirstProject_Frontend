import React from 'react';
import { UserOutlined } from "@ant-design/icons";
import * as Layout from "../items/Layouts";
import * as Items from "../items/items";

const SidebarPresecter = () => {
    return (
        <Layout.Layout>
            <Layout.ColumnWrapper>
                <Items.Image size={100} icon={<UserOutlined />} />
                <Items.Text>반가워요</Items.Text>
                <Items.Text>오늘도 즐거운 하루 되세요</Items.Text>
                <Items.SignButton to="/signin" bgc="#FA016D" color="#fff">
                    로그인
                </Items.SignButton>
                <Items.SignButton to="/signup" bgc="#fff" color="#000">
                    회원가입
                </Items.SignButton>
            </Layout.ColumnWrapper>
            <Layout.ColumnWrapper>
                <Items.LinkButton to="/signin" bgc="#FA016D" color="#fff">
                    일상 공유
                </Items.LinkButton>
                <Items.LinkButton to="/signup" bgc="#fff" color="#000">
                    중고 마켓
                </Items.LinkButton>
            </Layout.ColumnWrapper>
        </Layout.Layout>
    );
};

export default SidebarPresecter;