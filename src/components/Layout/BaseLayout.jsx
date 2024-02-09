import styled from "@emotion/styled";
import React from "react";
import Header from "../Header/Header";
import ControlBar from "../ControllBar/ControlBar";

const BaseLayout = (props) => {
    return (
        <>
            <ControlBar />
            <Header />
            <Layout>
                {props.children}
            </Layout>
        </>
    );
};

export default BaseLayout;

const Layout = styled.div`
  padding: 120px 12% 0 12%;
  outline: 2px solid #000;
  outline-offset: 100px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  max-width: 1440px;
  transform: translateX(-50%);

  @media (min-width: 1441px) {
    padding-left: 120px;
    padding-right: 120px;
  }
`;
