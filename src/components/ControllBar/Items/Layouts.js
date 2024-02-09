import styled from "@emotion/styled";

export const Layout = styled.form`
  position: fixed;
  width: 40%;
  max-width: 700px;
  min-width: 600px;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 15px;
  border: 2px solid #777;
  background-color: #fff;
  border-radius: 25px;
  background-color: rgba(247, 242, 235);
  gap: 20px;
`