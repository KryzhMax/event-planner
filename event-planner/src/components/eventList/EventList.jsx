import { StyledWrapper } from "./EventList.styled";
import Box from "../common/box";
import EventItem from "./event";

export const EventList = (/*{ items }*/) => {
  const items = [
    {
      id: 123,
      image: "https://via.placeholder.com/300", // Replace with the URL of your image placeholder
      date: "2023-08-03", // Replace with the desired date format
      title: "Random Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <Box as="section" style={{ padding: "24px" }}>
      <StyledWrapper>
        {items.map(({ ...item }) => (
          <EventItem key={item.id} {...item} />
        ))}
      </StyledWrapper>
    </Box>
  );
};
