import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import AlqiSatqi from "./pages/AlqiSatqi";
import Kiraye from "./pages/Kiraye";
import Agents from "./pages/Agents";
import ResidentialComplexes from "./pages/ResidentialComplexes";
import Bookmarks from "./pages/Bookmarks";
import New from "./pages/New";
import About from "./pages/About";
import TermsConditions from "./pages/TermsConditions";
import Privacy from "./pages/Privacy";
import Advertise from "./pages/Advertise";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import NoPage from "./pages/NoPage";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const savedSession = sessionStorage.getItem("session");
    if (savedSession) {
      setSession(JSON.parse(savedSession));
    }
  }, []);

  useEffect(() => {
    if (session) {
      sessionStorage.setItem("session", JSON.stringify(session));
    } else {
      sessionStorage.removeItem("session");
    }
  }, [session]);

  return (
    <>
      <Header session={session} setSession={setSession} />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="alqi-satqi" element={<AlqiSatqi />} />
          <Route path="kiraye" element={<Kiraye />} />
          <Route path="agentlikler" element={<Agents />} />
          <Route
            path="yasayis-kompleksleri"
            element={<ResidentialComplexes />}
          />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="new" element={<New />} />
          <Route path="about" element={<About />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="advertise" element={<Advertise />} />
          <Route
            path="login"
            element={
              session ? (
                <Navigate to="/profile" />
              ) : (
                <Login setSession={setSession} />
              )
            }
          />
          <Route
            path="profile"
            element={
              session ? (
                <Profile session={session} setSession={setSession} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
