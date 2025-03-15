import React, { useState } from "react";
import { Input, Icon, InputButtonContainer, ButtonSearch } from "./styled";
import SearchIcon from "./search-icon.svg";

interface SearchBarProps {
  value: string;
  setValue: (value: string) => void;
}

const SearchBar = ({ value, setValue }: SearchBarProps) => {
  return (
    <InputButtonContainer>
      <Input
        placeholder={"Введите запрос"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ButtonSearch>
        <Icon src={SearchIcon} />
      </ButtonSearch>
    </InputButtonContainer>
  );
};
export default SearchBar;
