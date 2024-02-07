import styled from "@emotion/styled";
import React from "react";

const BaseLayout = (props) => {
    return (
        <Layout>
            {props.children}
            <SideBar>

            </SideBar>
        </Layout>
    );
};

export default BaseLayout;

const Layout = styled.div`
    margin-left: 300px;
`;
const SideBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    background-color: #000;
`;
