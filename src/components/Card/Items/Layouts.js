import styled from "@emotion/styled";

export const Layout = styled.div`
  color: #72625d;
  position: relative;
  width: 90%;
  background-color: #e3ded9;
  border-radius: 15px;
  margin: 0 auto;
`
export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #777;
  padding: 5px 0 7px 0;
`
export const ColumnWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 12px 0 12px;
  margin-top: auto;
`