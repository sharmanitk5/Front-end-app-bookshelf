import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FileUpload from "../Components/FileUpload/FileUpload";
import Header from "../Components/Header";
export default function Signup() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  let create = () => {
    let data = {
      Name: Name,
      email: email,
      password: password,
      avatar: avatar,
    };
    fetch(process.env.REACT_APP_BASE_URL + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });

    navigate("/Signin");
  };
  return (
    <>
      <Header></Header>
      <div className="sign-up">
        <div className="signup">
          <div>
            <h2>Signup</h2>
          </div>
          <div>
            <div className="input">
              <TextField
                label="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </div>
            <div className="input">
              <TextField
                color="secondary"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </div>
            <div>
              <TextField
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </div>
            <div>
              <FileUpload onUploaded={setAvatar} />
            </div>
            <Button variant="contained" sx={{ margin: 1 }} onClick={create}>
              Create
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
