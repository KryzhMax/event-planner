import { StyledWrapper } from "./EventList.styled";
import Box from "../common/box";
import EventItem from "./event";

export const EventList = ({ items }) => {
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
