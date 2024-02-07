import styled from "@emotion/styled";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const BaseLayout = (props) => {
    return (
        <Layout>
            <Sidebar setPage={props.setPage} />
            {props.children}
        </Layout>
    );
};

export default BaseLayout;

const Layout = styled.div`
    margin-left: 300px;
`;
