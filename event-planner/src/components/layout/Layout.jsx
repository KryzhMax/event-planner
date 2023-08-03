import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./Layout.styled";
import Spinner from "../spinner";
import Header from "../header/Header";
import { EventList } from "../eventList/EventList";

export const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <EventList />
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
};
