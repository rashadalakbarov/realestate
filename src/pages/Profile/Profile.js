import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ session, setSession }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setSession(null);
    navigate("/login"); // useNavigate kullanımı
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Hoş geldiniz, {session.email}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
