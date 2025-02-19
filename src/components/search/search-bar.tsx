import React from "react";
import { Wrapper, Input, Icon, InputButtonContainer } from "./styled";
import SearchIcon from "./search-icon2.png";
const SearchBar = (props: any) => {
  console.log(props);
  return (
    <Wrapper>
      <InputButtonContainer>
        <Input placeholder={"Введите запрос"} />
        <Icon src={SearchIcon} />
      </InputButtonContainer>
    </Wrapper>
  );
};
export default SearchBar;
