import { useState } from "react";
import { SearchInput } from "../searchLine/SearchLine";
import { HeaderStyled, TitleStyled, ContainerStyled } from "./Header.styled";

function Header() {
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
  ]);
  // Добавить готовый джейсон

  const handleSearch = (searchTerm) => {
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
  };

  const handleClearSearch = () => {
    setItems("");
  };

  return (
    <HeaderStyled>
      <ContainerStyled>
        <TitleStyled>Event Planner</TitleStyled>
        <SearchInput
          data={items}
          onSearch={handleSearch}
          onClick={handleClearSearch}
        />
      </ContainerStyled>
    </HeaderStyled>
  );
}
export default Header;
