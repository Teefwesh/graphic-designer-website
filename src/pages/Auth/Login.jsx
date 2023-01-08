import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import "./Login.css";
import Logo from "../../images/mylogo.png";
import Navigation from "../../components/Navigation/Navigation";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
              type="email"
              className="input"
              required
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                style: {
                  fontSize: 15,
                },
              }}
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
            />

            <button type="submit" className="loginBtn">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
