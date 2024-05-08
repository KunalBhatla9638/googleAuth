import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<RegisterPage/>}
        />
        <Route
          path="/home"
          element={<HomePage/>}
        />
      </Routes>
    </>
  );
}

export default App;
