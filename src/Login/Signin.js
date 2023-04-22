import React, { useState } from "react";
import { Button, TextField, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let signin = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/authenticate/${email}/${password}`)
      .then((res) => res.json())
      .then((response) => {
        if (response == "Unauthorized") {
          // localStorage.setItem("isloggedin", "false");

          localStorage.clear();
          alert("Invalid");
        } else {
          localStorage.setItem("isloggedin", "true");

          localStorage.setItem("token", response.token);
          localStorage.setItem("email", response.email);
          localStorage.setItem("Name", response.Name);
          localStorage.setItem("avatar", response.avatar);
          localStorage.setItem("userid", response.id);
          navigate("/library");
        }
      });
  };
  return (
    <>
      <Header></Header>
      <div className="Signin">
        <div className="main">
          <div className="input">
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </div>
          <div className="input">
            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </div>
          <div>
            <Button variant="contained" onClick={signin}>
              Login
            </Button>
          </div>
          <div className="span">
            <span className="newuser">New User?</span>
            <span>
              <Link to="/Signup" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{ width: 100, padding: 1, margin: 1 }}
                >
                  Signup
                </Button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
