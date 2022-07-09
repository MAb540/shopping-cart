import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { useUserSignUp } from "../../../hooks/useAuth";
import FoamLayout from "./FoamLayout";
import { useNavigate } from "react-router-dom";
import Loader from "../../UtilityComponents/Loader";
import { signUpSchema } from "../../../schemas";
import Error from "../../UtilityComponents/Error";
import axios from "axios";

interface IFormInput {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const ErrorHandler = () => {};

function Signup() {
  const navigate = useNavigate();
  const { mutate, isSuccess, data, isLoading, isError, error } =
    useUserSignUp();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(signUpSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data);
    reset();
  };

  if (isLoading) {
    return (
      <FoamLayout>
        <Box sx={{ width: "100%" }}>
          <Loader />
        </Box>
      </FoamLayout>
    );
  }

  if (isSuccess) {
    navigate("/");
  }
  const ErrorJsx = isError ? (
    axios.isAxiosError(error) ? (
      <Error>{error.response?.data.message}</Error>
    ) : (
      <Error>{"some thing went wrong"}</Error>
    )
  ) : null;
  return (
    <FoamLayout>
      <Box sx={{ paddingTop: "1rem" }}>
        {ErrorJsx}
        <Typography variant="h3" align="center">
          Register
        </Typography>

        <Typography align="center">
          Create your account. It's free and only takes a minute.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={5}
            sx={{
              margin: { xs: "3rem 0" },
            }}
          >
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  onChange={onChange}
                  variant="standard"
                  placeholder="First Name"
                  type="text"
                  error={!!errors["firstName"]?.message}
                  helperText={errors?.firstName?.message}
                  sx={{ padding: { xs: "0" } }}
                  // {...field}
                />
              )}
            />

            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  onChange={onChange}
                  variant="standard"
                  placeholder="Last Name"
                  sx={{ padding: { xs: "0" } }}
                  error={!!errors["lastName"]?.message}
                  helperText={errors?.lastName?.message}
                />
              )}
            />
          </Stack>

          <Stack spacing={5}>
            <Controller
              name="userName"
              control={control}
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <TextField
                  fullWidth
                  placeholder="Username"
                  value={value}
                  onChange={onChange}
                  variant="standard"
                  error={!!errors["userName"]?.message}
                  helperText={errors?.userName?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <TextField
                  fullWidth
                  placeholder="Email"
                  value={value}
                  onChange={onChange}
                  variant="standard"
                  error={!!errors["email"]?.message}
                  helperText={errors?.email?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <TextField
                  fullWidth
                  placeholder=" Password"
                  type="password"
                  value={value}
                  onChange={onChange}
                  variant="standard"
                  error={!!errors["password"]?.message}
                  helperText={errors?.password?.message}
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <TextField
                  fullWidth
                  placeholder="Confirm Password"
                  type="password"
                  value={value}
                  onChange={onChange}
                  variant="standard"
                  error={!!errors["password"]?.message}
                  helperText={errors?.confirmPassword?.message}
                />
              )}
            />
          </Stack>

          <Button
            type="submit"
            variant="text"
            sx={{
              width: "100%",
              marginTop: "2rem",
              border: "1px solid #fff",
              borderRadius: "10px",
            }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </FoamLayout>
  );
}

export default Signup;
