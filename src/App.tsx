import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/search/search-bar";
import ListItem from "./components/list-item/list-item";
import { Wrapper } from "./styled";
import ModalWindow from "./components/modal-window/modal-window";

const app = () => {
  const [list, setList] = useState<string[]>([]);

  const addItem = (value: string) => {
    const _list = [...list, value];
    setList(_list);
  };

  return (
    <div>
      <SearchBar />
      <Wrapper>
        {list.map((item, index) => {
          return <ListItem text={item} key={index} />;
        })}
      </Wrapper>
      <ModalWindow addItem={addItem} />
    </div>
  );
};

export default app;
