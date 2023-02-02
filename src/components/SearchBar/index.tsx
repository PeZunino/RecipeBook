import React from "react";
import { FiFilter } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";
import Input from "../Input";
import { Container } from "./styles";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Input placeholder="Search by food name" icon={RiSearch2Line} />
      <Input placeholder="Filter" icon={FiFilter} className="left" />
    </Container>
  );
};

export default SearchBar;
