import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EventList } from "../../components/eventList/EventList";
import { selectEvents } from "../../redux/events/EventSelectors";
// import { fetchAllEvents } from "../../redux/events/EventSlice";

function HomePage() {
  // const items = [
  //   {
  //     id: 123,
  //     image: "https://via.placeholder.com/300", // Replace with the URL of your image placeholder
  //     date: "2023-08-03", // Replace with the desired date format
  //     time: "03:00pm",
  //     title: "Random Event",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     place: "Kyiv",
  //     category: "Music",
  //     priority: "Low",
  //   },
  //   {
  //     id: 133,
  //     image: "https://via.placeholder.com/300", // Replace with the URL of your image placeholder
  //     date: "2023-09-03", // Replace with the desired date format
  //     time: "at 03:00pm",
  //     title: "Random Event-111",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     place: "Kyiv",
  //     category: "Music",
  //     priority: "Low",
  //   },
  //   {
  //     id: 134,
  //     image: "https://via.placeholder.com/300", // Replace with the URL of your image placeholder
  //     date: "2023-09-03", // Replace with the desired date format
  //     time: "at 03:00pm",
  //     title: "Random Event-222",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     category: "Music",
  //     priority: "Low",
  //   },
  // ];
  const selectedEvents = useSelector(selectEvents);
  const dispatch = useDispatch();

  console.log("selectedEvents", selectedEvents);

  // useEffect(() => {
  //   // Fetch the items from db and set in state
  //   //  dispatch(fetchAllEvents(data).then((data) => ....)
  // }, []);

  return (
    <>
      <EventList items={selectedEvents} />
    </>
  );
}
export default HomePage;
