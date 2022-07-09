import Box from "@mui/material/Box";

import CartItems from "./Cart/CartItems";
import CartSummary from "./Cart/CartSummary";

import Divider from "@mui/material/Divider";
import { CloseSharp } from "@material-ui/icons";
import { Stack } from "@mui/material";
import useSideBar from "../hooks/useSideBar";

function Cart() {
  const { toggleDrawer } = useSideBar();
  return (
    <Box sx={{ margin: "0 auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        <Box>
          <h3>Cart</h3>
        </Box>
        <Box>
          <CloseSharp onClick={() => toggleDrawer()} />
        </Box>
      </Box>
      <Divider />

      <Stack direction="column" sx={{ marginTop: "2rem" }}>
        <Box sx={{ height: "20rem", overflowY: "auto" }}>
          <CartItems />
        </Box>

        <Box sx={{ marginTop: "2rem" }}>
          <CartSummary />
        </Box>
      </Stack>
    </Box>
  );
}

export default Cart;
