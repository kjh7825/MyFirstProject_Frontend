import styled from "@emotion/styled";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

export const Image = styled(Avatar)`
    background-color: #d8d8d8;
    margin: 0 auto 20px auto;
`;
export const Text = styled.p`
    color: white;
    margin: 5px auto;
`;
export const SignButton = styled(Link)`
    display: block;
    width: 70%;
    height: 40px;
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.bgc};
    background-color: ${(props) => props.bgc};
    margin: 10px auto;
    border-radius: 10px;
    font-weight: bold;
    text-decoration: none;
    line-height: 40px;
    text-align: center;
`;
export const LinkButton = styled(Link)`
    display: block;
    width: calc(90% - 30px);
    height: 40px;
    color: #fff;
    margin: 10px auto;
    font-weight: bold;
    text-decoration: none;
    line-height: 40px;
    font-size: 24px;
    transition: 0.1s;
    border-bottom: 1px solid #aaa;
    text-align: center;

    &:hover {
        background-color: #fa016d;
        border-radius: 10px;
        width: 90%;
    }
`;
