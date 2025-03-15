import React from "react";
import { Input, Icon, InputButtonContainer, ButtonSearch } from "./styled";
import SearchIcon from "./search-icon.svg";

const SearchBar = () => {
  return (
    <InputButtonContainer>
      <Input placeholder={"Введите запрос"} />
      <ButtonSearch>
        <Icon src={SearchIcon} />
      </ButtonSearch>
    </InputButtonContainer>
  );
};
export default SearchBar;
