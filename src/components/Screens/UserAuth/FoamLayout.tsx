import { Box } from "@mui/system";
import React from "react";

type Props = {
  children: JSX.Element;
};

function FoamLayout({ children }: Props) {
  return (
    <Box
      sx={{
        padding: { xs: "1rem" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: "2px solid #f1f1f1",
          borderRadius: "10px",
          backgroundColor: "#f1f1f1",
          padding: "0 2rem",
          paddingBottom: "1rem",
          maxWidth: "50rem",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default FoamLayout;
