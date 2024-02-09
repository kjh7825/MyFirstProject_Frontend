import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: auto 0;
`
export const BaseText = styled.div`
  font-size: 16px;
  font-weight: bold;
`
export const Menu = styled(Link, {
    shouldForwardProp: prop => prop !== 'isCurrentPage',
})`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: auto auto 0 auto;
  padding: 15px;
  border-radius: 15px;
  text-decoration: ${props => props.isCurrentPage ? 'underline' : 'none'};
`;
export const SignBtn = styled(Link)`
  font-size: 16px;
  height: 50px;
  font-weight: bold;
  color: #443028;
  margin: auto 0 auto auto;
  padding: 15px;
  border-radius: 25px;
  background-color: #f7f2eb;
  border: 2px solid #443028;
  text-decoration: none;
`