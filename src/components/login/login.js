import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"

export default function Login() {
  const account = {
    username: "admin",
    password: "wellnessmate",
  };

  const usernameRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Kiểm tra đăng nhập
    if (username === account.username && password === account.password) {
      // Nếu đăng nhập thành công, sử dụng navigate để chuyển hướng đến "/main"
      navigate("/main");
    } else {
      // Nếu đăng nhập không thành công, hiển thị thông báo lỗi
      setLoginError(true);
    }
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form__container">
        <div className="form__controls">
          <label htmlFor="username">Username</label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <button className="button" type="submit">
            Login
          </button>
        </div>
      </form>
      {loginError && <p className="error-message">Login not successful. Please try again.</p>}
    </div>
  );
}
