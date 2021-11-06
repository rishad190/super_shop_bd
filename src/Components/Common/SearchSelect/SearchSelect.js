import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import styled from "styled-components";
const SearchSelect = () => {
  const [age, setAge] = React.useState("");
  const data = ["All Catagories", "Milks and Dairies", "Wines & Drinks"];
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return <SearchSelectMain></SearchSelectMain>;
};

export default SearchSelect;
const SearchSelectMain = styled.div``;
const SearchSelectInput = styled.input`
  margin: 10px;
`;
