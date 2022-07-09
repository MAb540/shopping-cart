import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

function CheckoutScreen() {
  const { cartList } = useCart();
  let navigate = useNavigate();

  useEffect(() => {
    if (cartList.length === 0) {
      navigate("/");
    }
  }, [cartList.length, navigate]);

  return (
    <Box>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </Box>
  );
}

export default CheckoutScreen;
