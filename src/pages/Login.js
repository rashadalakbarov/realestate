import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/alert/Alert";

const Login = ({ setSession }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email ve şifrə mütləq daxil edilməlidir.");
      return;
    }
    if (!validateEmail(email)) {
      setError("E-mail address düzgün daxil edilməyib. Yenidən cəhd edin!");
      return;
    }

    // Session başlat
    setSession({ email });
    navigate("/profile"); // useNavigate kullanımı
  };
  return (
    <div
      style={{ height: "500px" }}
      className="d-flex align-items-center justify-content-center"
    >
      <main className="w-100 m-auto" style={{ maxWidth: "330px" }}>
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal text-center mb-4">
            İstifadəçi Girişi
          </h1>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingEmail">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Şifrə</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Şifrəni unutdum
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
            Daxil ol
          </button>

          {error && (
            <Alert
              message={error}
              duration={3000}
              onClose={() => setError("")}
            />
          )}
        </form>
      </main>
    </div>
  );
};

export default Login;
