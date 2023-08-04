import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  events: [
    {
      id: 123,
      image: "https://via.placeholder.com/300", // Replace with the URL of your image placeholder
      date: "2023-08-03", // Replace with the desired date format
      time: "03:00pm",
      title: "Random Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      place: "Kyiv",
      category: "Music",
      priority: "Low",
    },
    {
      id: 133,
      image: "https://via.placeholder.com/300", // Replace with the URL of your image placeholder
      date: "2023-09-03", // Replace with the desired date format
      time: "at 03:00pm",
      title: "Random Event-111",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      place: "Kyiv",
      category: "Music",
      priority: "Low",
    },
    {
      id: 134,
      image: "https://via.placeholder.com/300", // Replace with the URL of your image placeholder
      date: "2023-09-03", // Replace with the desired date format
      time: "at 03:00pm",
      title: "Random Event-222",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Music",
      priority: "Low",
    },
  ],
  isLoading: false,
  error: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    fetchAllEvents(state, { payload }) {
      state.events = payload;
      return state;
    },

    addEvent(state, { payload }) {
      return {
        ...state,
        events: [...state.events, payload],
      };
    },

    deleteEvent(state, { payload }) {
      return {
        ...state,
        events: state.events.filter(({ id }) => id !== payload.id),
      };
    },
  },
});

export const { fetchAllEvents, addEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
