import { useState } from "react";
// import Box from "../common/box";
import ButtonIcon from "../common/button/buttonIcon";
import {
  InputWrapper,
  Input,
  //   Label,
  IconClose,
  IconSearch,
  IconWrapper,
} from "./SearchLine.styled";

export const SearchInput = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearch("");
    onSearch("");
  };

  const handleSearchClick = () => {
    onSearch(search);
  };

  return (
    // <Form>
    <InputWrapper position="relative">
      {/* <Label htmlFor="search" /> */}
      <Input
        value={search}
        id="search"
        type="text"
        name="search"
        autoFocus
        autoComplete="off"
        onChange={handleInputChange}
        placeholder="Search by keywords"
        variant="standard"
        aria-describedby="search info"
      />
      <IconWrapper>
        {search ? (
          <ButtonIcon
            type="button"
            aria-label="clear button"
            onClick={handleClear}
          >
            <IconClose />
          </ButtonIcon>
        ) : (
          <ButtonIcon
            type="button"
            aria-label="search button"
            onClick={handleSearchClick}
          >
            <IconSearch />
          </ButtonIcon>
        )}
      </IconWrapper>
    </InputWrapper>
    // </Form>
  );
};
