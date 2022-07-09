import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Cart from "../Cart";
import useSideBar from "../../hooks/useSideBar";

export default function SideBarCart() {
  const { sideBarStatus, toggleDrawer } = useSideBar();

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer} style={{ color: "#fff" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mx: 4, display: { xs: "none", md: "flex" } }}
          >
            {"Cart"}
          </Typography>
        </Button>
        <Drawer anchor={"right"} open={sideBarStatus} onClose={toggleDrawer}>
          <Box sx={{ width: "25rem", padding: "1rem" }}>
            <Cart />
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
