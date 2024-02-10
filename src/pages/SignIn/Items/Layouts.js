import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
export const LoginForm = styled.form`
  display: flex;
  width: 500px;
  flex-direction: column;
  padding: 50px;
  border: 2px solid #000;
  border-radius: 15px;
`
export const RowWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`