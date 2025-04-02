import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/search/search-bar";
import ListItem from "./components/list-item/list-item";
import { Wrapper } from "./styled";
import ModalWindow from "./components/modal-window/modal-window";
import DropDown from "./components/dropdown-menu/dropdown-menu";
import DropdownMenu from "./components/dropdown-menu/dropdown-menu";

const app = () => {
  const [list, setList] = useState<string[]>([]);

  const addItem = (value: string) => {
    const _list = [...list, value];
    setList(_list);
  };

  const [value, setValue] = useState("");

  const filteredList = list.filter((item) => {
    if (item.toLowerCase().includes(value.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <div className="css.container">
        <SearchBar value={value} setValue={setValue} />
        <DropdownMenu></DropdownMenu>
      </div>
      <Wrapper>
        {filteredList.map((item, index) => {
          return <ListItem text={item} key={index} />;
        })}
      </Wrapper>
      <ModalWindow addItem={addItem} />
    </div>
  );
};

export default app;
