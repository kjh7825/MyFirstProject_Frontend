import styled from "@emotion/styled";

export const HeaderText = styled.h3`
  margin: 0 auto 25px;
`
export const RadioInput = styled.input`
    
`
export const SubmitBtn = styled.button`
  background-color: dodgerblue;
  color: #fff;
  font-weight: bold;
  margin: 30px 0 0;
  padding: 15px;
  border-radius: 10px;
  outline: none;
  border: none;

  &:active {
    background-color: #1b82e7;
  }
`
export const Text = styled.div`
  font-weight: bold;
  font-size: 14px;
  //padding: 10px 7px 0;
  line-height: 10px;
  
  & span {
    color: red;
    font-weight: lighter;
    font-size: 10px;
  }
`
export const PhoneInput = styled.input`
  width: 20%;
  padding: 5px;
  text-align: center;
`