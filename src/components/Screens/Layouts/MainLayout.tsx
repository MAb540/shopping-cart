import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../UtilityComponents/Nav";
import { Container } from "../../commonMuiComponents";

import React from "react";

function MainLayout() {
  return (
    <Fragment>
      <header>
        <Nav />
      </header>
      <Container>
        <Outlet />
      </Container>
    </Fragment>
  );
}

export default MainLayout;
