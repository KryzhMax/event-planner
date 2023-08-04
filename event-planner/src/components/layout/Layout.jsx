import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./Layout.styled";
import Spinner from "../spinner";
import Header from "../header/Header";

function Layout() {
  return (
    <>
      <Header />
      <Wrapper>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
}

export default Layout;
