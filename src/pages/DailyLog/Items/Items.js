import styled from "@emotion/styled";

export const HeaderText = styled.h3`
  padding: 30px 0 30px 5%;
`
export const LoadData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  color: ${(props)=> props.isActive? '#000' : '#aaa'};
  cursor: pointer;
`