import styled from "@emotion/styled";

export const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
  height: 150px;
`
export const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 12px;
  padding: 5px 15px 5px 15px;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 10%;
`
export const Content = styled.div`
  font-weight: normal;
  white-space: normal;
  width: 100%;
  font-size: 12px;
  padding: 0 15px 5px 15px;
  overflow: hidden;
  line-height: 1.1em;
  height: calc(3.3em + 10px);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`
export const BoldText = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: #72625d;
  
  &:before {
    content: '\\00a0';
  }
`
export const LikeBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #e3ded9;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1px;
  font-size: 14px;
`