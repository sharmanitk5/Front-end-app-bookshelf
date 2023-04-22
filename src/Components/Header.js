import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [avt, setAvt] = useState();
  const [username, setUsername] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setUsername(localStorage.getItem("Name"));
    // setAvt(
    //   process.env.REACT_APP_BASE_URL +
    //     "/image/" +
    //     localStorage.getItem("avatar")
    // );
  }, []);

  return (
    <div className="header">
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{ width: 100, padding: 1, margin: 1, float: "left" }}
        >
          Home
        </Button>
      </Link>
      <Link to="/Signin" style={{ textDecoration: "none" }}>
        <Button variant="contained" sx={{ width: 100, padding: 1, margin: 1 }}>
          Signin
        </Button>
      </Link>
      {username !== null && username !== "" ? (
        <div>
          <Link to="/Mybooks" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{ width: 100, padding: 1, margin: 1, float: "right" }}
            >
              {username}
            </Button>
          </Link>
          <Link to="/Signout" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ width: 100, padding: 1, margin: 1, float: "right" }}
            >
              Signout
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/Signup" style={{ textDecoration: "none" }}>
            <i
              class="fa fa-user-circle"
              aria-hidden="true"
              style={{ float: "right", margin: 15 }}
            ></i>
          </Link>
        </div>
      )}
      {/* <Avatar src={avt}> </Avatar> */}
    </div>
  );
}
