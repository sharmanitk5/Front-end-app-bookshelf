import React from "react";
import Header from "./Header";

import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import Community from "./Community";
import Bookscollection from "./Bookscollection";

export default function Library() {
  return (
    <>
      <div className="my">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{ width: 100, padding: 1, margin: 1, float: "left" }}
          >
            Home
          </Button>
        </Link>
        <Link to="/mybooks" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{ width: 100, padding: 1, margin: 1, float: "left" }}
          >
            My Books
          </Button>
        </Link>
        <Link to="/Community">
          <Button
            variant="contained"
            sx={{ width: 150, padding: 1, margin: 1, float: "left" }}
          >
            Add Friend
          </Button>
        </Link>

        <Link to="/Addbooks" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{ width: 100, padding: 1, margin: 1 }}
          >
            Addbooks
          </Button>
        </Link>
        <Link to="/Friends" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{ width: 100, padding: 1, margin: 1 }}
          >
            Myfriends
          </Button>
        </Link>
      </div>

      <div>
        <h1>Welcome to your library</h1>
      </div>
    </>
  );
}
