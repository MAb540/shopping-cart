import { useMutation } from "react-query";
import { API_BASE_URL } from "../constants";

import axios from "axios";

const signUpUrl = `${API_BASE_URL}auth/signup`;
const signInUrl = `${API_BASE_URL}auth/signin`;
const profileUrl = `${API_BASE_URL}api/user/profile`;

const userSignUpRequest = async (data: any) => {
  const { data: response } = await axios.post(signUpUrl, data);
  return response;
};

const userSignIn = async (data: any) => {
  const { data: response } = await axios.post(signInUrl, data);
  return response;
};

// const userProfile = async (data: any) => {
//   const { data: response } = await axios.post(signInUrl, data);
//   return response;
// };

export function useUserSignUp() {
  return useMutation(userSignUpRequest);
}

export function useUserSignIn() {
  return useMutation(userSignIn);
}

// export function useProfile(){
//   return useMutation();
// }
