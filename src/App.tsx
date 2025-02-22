import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/search/search-bar";
import ListItem from "./components/list-item/list-item";
import { Wrapper } from "./styled";

const app = () => {
  const [list, setList] = useState<string[]>([]);

  return (
    <div>
      <SearchBar />
      <Wrapper>
        {list.map((item, index) => {
          return <ListItem text={item} key={index} />;
        })}
        <button
          onClick={() => {
            const _list = list.concat("Note #" + (list.length + 1));

            setList(_list);
          }}
        >
          Добавить Элемент
        </button>
      </Wrapper>
    </div>
  );
};

export default app;
