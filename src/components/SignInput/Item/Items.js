import styled from "@emotion/styled";

export const Input = styled.input`
  padding: 15px;
  outline: none;
  border: ${(props) => `1px solid ${props.color};`}
  font-size: 15px;
  border-radius: 5px;
  width: 100%;

  &:focus {
    box-shadow: ${(props) => `0 0 2px 2px ${props.color};`}
    border: 1px solid #fff;
  }
`
export const Message = styled.div`
  position: absolute;
  margin: 0 0 0 15px;
  left: 0;
  border-radius: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  background-color: #fff;
  transition : 0.3s;
`