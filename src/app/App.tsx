import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "../styles/GlobalStyles";
import Dashboard from "./pages/dashboard";
import Background from "../components/background";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import GuestSignin from "./pages/guestLogin";
import Tutorial from "./pages/tutorial";
import Cheatsheet from "./pages/cheatsheet";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Background />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/guest" element={<GuestSignin />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/cheatsheet" element={<Cheatsheet />} />
        </Routes>
      </main>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
