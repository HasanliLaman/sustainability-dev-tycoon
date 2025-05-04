import { Routes, Route } from "react-router";
import GlobalStyle from "../styles/GlobalStyles";
import Dashboard from "./pages/dashboard";
import Background from "../components/background";

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Background />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
