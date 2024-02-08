import styled from "@emotion/styled";

export const Layout = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1440px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 120px;
  display: flex;
  flex-direction: row;
  padding: 0 10%;
  border-bottom: 2px solid #777;
  background-color: #fff;
  z-index: 99;
`
export const RowWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
`
export const ColumnWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;
  justify-content: center;
`
export const SignWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: auto 0 auto auto;
`