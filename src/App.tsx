import React from "react";
import "./App.css";
import SearchBar from "./components/search/search-bar";
import ListItem from "./components/list-item/list-item";

const app = () => {
  return (
    <>
      <SearchBar aa={"aa"} aaaa={"dsfsdf"} />
      <ListItem isChecked={true} text="dsfjlnsdfjndsjfn" />
      <ListItem isChecked={false} text="33333" />
      <ListItem text="456566" />
    </>
  );
};

export default app;
