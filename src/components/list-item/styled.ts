import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #6c63ff;
  display: flex;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }
`;
export const ListItemStyled = styled.div<{ $isChecked?: boolean }>`
  display: flex;
  font-size: 20px;
  margin-bottom: 16px;
  font-weight: bolder;
  padding-top: 17px;

  ${(props) =>
    props.$isChecked &&
    css`
      color: darkgray;
      text-decoration: line-through;
    `}
`;

export const CheckBox = styled.input`
  height: 24px;
  width: 24px;
  margin-right: 16px;
  accent-color: #6c63ff;
  cursor: pointer;
  border-color: #6c63ff;
`;
export const Icon = styled.img`
  width: 13px;
  height: 13px;
`;
export const Container = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;
