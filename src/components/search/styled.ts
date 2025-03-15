import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 16px;
  flex-grow: 1;
  border: none;
  padding: 5px;
`;
export const Icon = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  top: calc(50% - 14px);
  right: 16px;
`;
export const ButtonSearch = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
`;
export const InputButtonContainer = styled.div`
  position: relative;
  width: 750px;
  display: flex;
  border: 2px solid #6c63ff;
  border-radius: 5px;
  margin: 30px auto;
  &:hover {
    outline: pink;
    border-color: darkorchid;
  }
`;
