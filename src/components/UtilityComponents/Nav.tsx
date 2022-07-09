import { AppBar, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import SideBarCart from "../Screens/Sidebarcart";

function Nav() {
  console.count("nav bar rerendered: ");

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "flex-end",
          marginRight: "5rem",
          marginTop: "1rem",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            mx: 4,
            display: { xs: "none", md: "flex" },
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Home
          </Link>
        </Typography>
        <SideBarCart />{" "}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
