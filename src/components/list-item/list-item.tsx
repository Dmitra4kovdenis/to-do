import React from "react";
import { CheckBox, Icon, ListItemStyled, Wrapper, Container } from "./styled";
import { useState } from "react";
import IconEdit from "./edit.svg";

interface ListItemProps {
  isChecked?: boolean;
  text?: string;
}

const ListItem = ({ text }: ListItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Wrapper>
      <ListItemStyled $isChecked={isChecked}>
        <CheckBox
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        {text}
      </ListItemStyled>
      <Container>
        <Icon src={IconEdit}></Icon>
      </Container>
    </Wrapper>
  );
};

export default ListItem;
