import styled, { css } from "styled-components";
import { useState } from "react";

interface ListItemProps {
  text: string;
  isChecked?: boolean;
}

const ListItemStyled = styled.div<{ $isChecked?: boolean }>`
  display: flex;
  font-size: 20px;
  margin-bottom: 16px;

  ${(props) =>
    props.$isChecked &&
    css`
      color: darkgray;
    `}
`;

const CheckBox = styled.input`
  height: 24px;
  width: 24px;
  margin-right: 16px;
`;

const ListItem = ({ text }: ListItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ListItemStyled $isChecked={isChecked}>
      {isChecked ? <div>Готово</div> : <div>Не готово</div>}

      {isChecked && <div>Надо</div>}
      <CheckBox
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      {text}
    </ListItemStyled>
  );
};

export default ListItem;
