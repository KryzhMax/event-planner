import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/homePage/HomePage";
import EventDetailsPage from "./pages/eventDetailsPage/EventDetailsPage";
import CreateEventPage from "./pages/createEventPage/CreateEventPage";
import EditEventPage from "./pages/editEventPage/EditEventPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/event-details/:id" element={<EventDetailsPage />} />
          <Route path="/create" element={<CreateEventPage />} />
          <Route
            path="/event-details/:eventId/edit"
            element={<EditEventPage />}
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
