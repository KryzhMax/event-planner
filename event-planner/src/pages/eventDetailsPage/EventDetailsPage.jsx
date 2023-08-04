import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectEvents } from "../../redux/events/EventSelectors";
import * as SC from "../../components/eventList/event/EventItem.styled";

function EventDetailsPage() {
  const selectedEvents = useSelector(selectEvents);
  const { id } = useParams();
  const eventId = parseInt(id);

  const renderedEvent = selectedEvents.filter((evt) => evt.id === eventId);

  console.log(renderedEvent[0]);
  return (
    <SC.Container>
      <NavLink to="/">
        <div>Back</div>
      </NavLink>
      <SC.StyledCard>
        <SC.StyledTitle>{renderedEvent[0].title}</SC.StyledTitle>

        <div>
          <img
            src={renderedEvent[0].image}
            alt=""
            style={{ width: "100%", height: "168px" }}
          />
          <div>
            <SC.StyledDesc>{renderedEvent[0].description}</SC.StyledDesc>
            <span>{renderedEvent[0].category}</span>
            <span>{renderedEvent[0].priority}</span>
            <SC.StyledDatePlace>{renderedEvent[0].place}</SC.StyledDatePlace>
            <div>
              <SC.StyledDatePlace>{renderedEvent[0].date}</SC.StyledDatePlace>
              <SC.StyledDatePlace>{renderedEvent[0].time}</SC.StyledDatePlace>
            </div>
            <button type="button">Delete</button>
          </div>
        </div>
      </SC.StyledCard>
    </SC.Container>
  );
}

export default EventDetailsPage;
