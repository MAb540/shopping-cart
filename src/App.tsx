import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CheckoutScreen from "./components/Screens/CheckoutScreen/CheckoutScreen";
import Signup from "./components/Screens/UserAuth/Signup";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./components/Screens/UserAuth/Login";
import UserPortal from "./components/UserPortal/UserPortal";
import Products from "./components/Products";
import MainLayout from "./components/Screens/Layouts/MainLayout";
import DashboardLayout from "./components/Screens/Layouts/DashboardLayout";

// const Login = () => {
//   const handleClick = () => {
//     window.location.href =
//       "http://localhost:9011/oauth2/authorize?client_id=c3bc2ea7-7581-4594-9e5a-296208dd25e5&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Foauth-redirect";
//   };

//   return (
//     <div>
//       <Button> some login stufff</Button>

//       <Button onClick={handleClick}>Login</Button>

//       {/* <a target="_blank" rel="noreferrer" href="http://localhost:9011/oauth2/authorize?client_id=c3bc2ea7-7581-4594-9e5a-296208dd25e5&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Foauth-redirect">
//       login
//     </a> */}
//     </div>
//   );
// };
const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Products />} />
              <Route path="checkout" element={<CheckoutScreen />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>

            <Route path="user-portal" element={<DashboardLayout />}>
              <Route index element={<UserPortal />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
