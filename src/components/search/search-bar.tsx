import React from "react";
import {Wrapper, Input, Icon, InputButtonContainer, ButtonSearch} from "./styled";
import SearchIcon from "./search-icon.svg"
const SearchBar = () => {
    return (
        <Wrapper>
            <InputButtonContainer>
        <Input placeholder={"Введите запрос"} />
                <ButtonSearch>
            <Icon src = {SearchIcon}/>
                </ButtonSearch>
            </InputButtonContainer>
        </Wrapper>
    )
}
export default SearchBar;