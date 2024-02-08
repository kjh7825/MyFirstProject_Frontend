import styled from "@emotion/styled";
// import {Link} from "react-router-dom";
export const BaseText = styled.div`
  font-size: 16px;
  font-weight: bold;
`
export const SearchBtn = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: #443028;
  background-color: #f7f2eb;
  border-radius: 5px;
  outline: none;
  border: 1px solid #443028;
  cursor: pointer;
  padding: 5px 10px;

  &:active {
    background-color: #e3ded9;
  }
`
export const InputBox = styled.input`
  outline: none;
  border: 1px solid #443028;
  border-radius: 5px;
  padding: 5px;
  width: 30%;
`
