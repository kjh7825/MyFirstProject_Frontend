import styled from "@emotion/styled";
import React from "react";

const MainLayout = (props) => {
    return (
        <Layout>
            {props.children}
        </Layout>
    );
};

export default MainLayout;

const Layout = styled.div``;
