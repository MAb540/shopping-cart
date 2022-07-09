import { useState } from "react";
import { Alert, CloseIcon, IconButton } from "../commonMuiComponents";

type Props = {
  children: string;
};

function Error({ children }: Props) {
  const [open, setOpen] = useState(true);

  return open ? (
    <Alert
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
      variant="filled"
      severity="error"
    >
      {children}
    </Alert>
  ) : null;
}

export default Error;
