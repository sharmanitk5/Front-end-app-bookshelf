import React from "react";
import { useEffect } from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
export default function Signout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isloggedin", "false");
    localStorage.setItem("token", "");
    localStorage.setItem("email", "");
    localStorage.setItem("Name", "");
    localStorage.setItem("avatar", "");
    localStorage.setItem("userid", "");
    navigate("/home");
  });

  return;
  <>
    <Header></Header>
    <div>
      <h1>Logout Successfully</h1>
    </div>
  </>;
}
