import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Layout>
            <Menu>
                <Link to="/<script>alert('XSS 공격!');</script>">메뉴1</Link>
                <Link to="/">메뉴1</Link>
                <Link to="/">메뉴1</Link>
                <Link to="/">메뉴1</Link>
            </Menu>
        </Layout>
    );
};

export default Header;

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #aaa;
`;
const Menu = styled.div`
    display: grid;
    width: 50%;
    max-width: 500px;
    grid-template-columns: repeat(5, minmax(10%, 100px));
    grid-template-rows: 50px;

    & a {
        text-decoration: none;
        color: #000;
        font-weight: bold;
    }
`;
