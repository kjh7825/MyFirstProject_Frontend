import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
  max-width: 1440px;
  padding: 20px 0;
`
export const GridLayout = styled.div`
  display: grid;
  width: 100%;
  max-width: 1440px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  margin: 0 auto;
`
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  gap: 20px;
  padding-top: 20px;
`