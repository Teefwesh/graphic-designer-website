import React, { useState, useEffect } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";

import "./Login.css";
import Logo from "../../images/mylogo.png";
import Navigation from "../../components/Navigation/Navigation";
import { login } from "../../actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useSelector((state) => state.user);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(login(inputs));
    navigate("/");
  };

  return (
    <>
      <div className="mobileOnly">
        <Navigation />
      </div>

      <div className="loginContainer">
        <div>
          <Link to="/">
            <img src={Logo} alt="agprints Logo" className="loginLogo" />
          </Link>
        </div>

        <div className="loginForm">
          <form className="inputForm">
            <div className="lock">
              <LockOutlinedIcon fontSize="medium" />
            </div>

            <TextField
              label="Email Address"
              name="email"
              placeholder="example@gmail.com"
              type="email"
              className="input"
              required
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                style: {
                  fontSize: 15,
                },
              }}
              onChange={handleChange}
            />

            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              className="input"
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? (
                        <Visibility fontSize="medium" />
                      ) : (
                        <VisibilityOff fontSize="medium" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
                style: {
                  fontSize: 15,
                },
              }}
              onChange={handleChange}
            />

            {error && <span className="notify"> wrong email or password</span>}
            <button type="submit" className="loginBtn" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
