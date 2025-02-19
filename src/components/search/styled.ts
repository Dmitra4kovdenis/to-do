import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;
export const Input = styled.input`
  width: 750px;
  height: 40px;
  outline: none;

  font-size: 16px;
  padding: 5px;
  border: 2px solid magenta;
  border-radius: 5px;

  &:focus {
    outline: pink;
    border-color: darkorchid;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 16px;
  top: calc(50% - 10px);
`;

export const InputButtonContainer = styled.div`
  position: relative;
  margin: 30px auto;
`;
