import { Box, Button, TextField, Typography } from "@mui/material";
import FoamLayout from "./FoamLayout";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserSignIn } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Loader from "../../UtilityComponents/Loader";
import { loginSchema } from "../../../schemas";
import Error from "../../UtilityComponents/Error";
import axios from "axios";

interface IFormInput {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const { mutate, isSuccess, data, isLoading, isError, error } =
    useUserSignIn();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    mutate(data);
    reset();
  };

  // if (isLoading) {
  //   return (
  //     <FoamLayout>
  //       <Box sx={{ width: "100%" }}>
  //         <Loader />
  //       </Box>
  //     </FoamLayout>
  //   );
  // }

  if (isSuccess) {
    navigate("user-portal");
  }

  const LoadingJsx = isLoading ? <Loader /> : null;

  const ErrorJsx = isError ? (
    axios.isAxiosError(error) ? (
      <Error>{error.response?.data.message}</Error>
    ) : (
      <Error>{"some thing went wrong"}</Error>
    )
  ) : null;

  return (
    <FoamLayout>
      <Box>
        {LoadingJsx}
        {ErrorJsx}
        <Typography mt={4} variant="h3" align="center">
          Login
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
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
                sx={{
                  padding: "1rem 0",
                }}
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
                sx={{
                  padding: "1rem 0",
                }}
              />
            )}
          />

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
            Log In
          </Button>
        </form>

        <Typography align="center" mt={2}>
          Forgot password ? click Here
        </Typography>
      </Box>
    </FoamLayout>
  );
}

export default Login;
