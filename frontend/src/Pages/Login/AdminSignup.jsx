import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import Header from "../Home/Header/Header";

export default function AdminSignup() {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");
    
    const newErrors = {};
    if (!User.trim()) newErrors.User = "Username is required";
    if (!Password.trim()) newErrors.Password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("/api/admin/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: User, password: Password }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setMessage("Admin added successfully");
        setTimeout(() => navigate("/admin/login"), 2000);
      } else {
        setErrors({ general: responseData.message || "Signup failed" });
      }
    } catch (error) {
      setErrors({ general: "An unexpected error occurred" });
    }
  };

  return (
    <>
      <Header />
      <section className="main">
        <div className="container py-5">
          <h2>Admin Signup</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={User}
                onChange={(e) => setUser(e.target.value)}
              />
              {errors.User && <div className="error-message">{errors.User}</div>}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.Password && <div className="error-message">{errors.Password}</div>}
            </div>
            <button type="submit">Sign Up</button>
            {errors.general && <div className="error-message">{errors.general}</div>}
            {message && <div className="success-message">{message}</div>}
          </form>
        </div>
      </section>
    </>
  );
}
