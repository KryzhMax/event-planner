import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Box from "../../../components/common/box";
import {
  StyledImg,
  StyledDate,
  //   StyledPlace,
  StyledDesc,
  //   StyledLine,
  StyledEvent,
  StyledTitle,
  TextWrapper,
  BoxHover,
  StyledReadMore,
} from "./EventItem.styled";

function EventItems(item) {
  console.log(item);
  const { title, date, description, eventId, image } = item;
  const [showButton, setShowButton] = useState(false);
  const searchParams = useSearchParams();

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  const handleReadMoreClick = () => {
    searchParams.set("eventId", eventId);
  };

  return (
    <StyledEvent>
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <StyledImg src={image} />
        {/* <StyledLine /> */}
        <BoxHover>
          <TextWrapper style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
            <StyledDate>{date || " "}</StyledDate>
            {/* <StyledPlace>{place || " "}</StyledPlace> */}
          </TextWrapper>
          <TextWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledDesc>{description}</StyledDesc>
          </TextWrapper>
          {showButton && (
            <StyledReadMore to="/event-details" onClick={handleReadMoreClick}>
              Read More
            </StyledReadMore>
          )}
        </BoxHover>
      </Box>
    </StyledEvent>
  );
}

export default EventItems;
