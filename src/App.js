import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import Index from "./pages/Index";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
