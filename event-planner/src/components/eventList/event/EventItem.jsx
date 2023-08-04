import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
import Box from "../../../components/common/box";
import * as SC from "./EventItem.styled";

function EventItems(item) {
  const {
    title,
    date,
    description,
    id,
    image,
    place,
    time,
    // category,
    // priority,
  } = item;
  const [showButton, setShowButton] = useState(false);
  // const searchParams = useSearchParams();

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  const handleReadMoreClick = () => {
    console.log("single item", item);
    console.log(id);
    // searchParams.set("eventId", id);
  };

  return (
    <SC.StyledEvent>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ height: "inherit", backgroundColor: "#fff" }}
      >
        <SC.StyledImg src={image} />
        {/* <StyledLine /> */}
        <SC.BoxHover>
          <SC.TextWrapper
            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          >
            <Box
              style={{
                padding: "8px 16px",
              }}
            >
              <SC.StyledDatePlace>{date || ""}</SC.StyledDatePlace>
              <SC.StyledDatePlace> at {time || ""}</SC.StyledDatePlace>
            </Box>
            <SC.StyledDatePlace style={{ padding: "8px 16px" }}>
              {place || ""}
            </SC.StyledDatePlace>
          </SC.TextWrapper>
          <SC.TextWrapper style={{ display: "block" }}>
            <SC.StyledTitle>{title}</SC.StyledTitle>
            <SC.StyledDesc>{description}</SC.StyledDesc>
            {showButton && (
              <SC.StyledReadMore
                to={`/event-details/${id}`}
                item={item}
                onClick={handleReadMoreClick}
              >
                Read More
              </SC.StyledReadMore>
            )}
          </SC.TextWrapper>

          {/* <StyledReadMore to={`/event-details/${id}`} onClick={handleReadMoreClick} item={item}>
            Read More
          </StyledReadMore> */}
        </SC.BoxHover>
      </Box>
    </SC.StyledEvent>
  );
}

export default EventItems;
