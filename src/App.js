import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import AlqiSatqi from "./pages/Alqi-Satqi/AlqiSatqi";
import Kiraye from "./pages/Kiraye/Kiraye";
import Agency from "./pages/Agency/Agency";
import AgencyDetail from "./pages/Agency-Detail/AgencyDetail";
import ResidentialComplexes from "./pages/Residential-Complexes/ResidentialComplexes";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import New from "./pages/New/New";
import About from "./pages/About/About";
import TermsConditions from "./pages/Terms-Conditions/TermsConditions";
import Privacy from "./pages/Privacy/Privacy";
import Advertise from "./pages/Advertise/Advertise";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";

// profile
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import NoPage from "./pages/NoPage/NoPage";

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
          <Route path="agentlikler" element={<Agency />} />
          <Route path="/agentlik/:id" element={<AgencyDetail />} />
          <Route path="/detail/:id" element={<Detail />} />
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
          <Route path="contact" element={<Contact />} />
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
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
