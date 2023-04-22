import { Button, TextField, IconButton } from "@mui/material";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  const [name, setName] = useState();

  const [data, setData] = useState([]);

  let search = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/books/${name}/search`)
      .then((res) => res.json())
      .then((response) => setData(response));
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/categories`)
      .then((res) => res.json())
      .then((response) => setData(response));
  }, []);

  return (
    <>
      <Header></Header>
      <div className="heading1">Bookshelf</div>
      <div className="heading">Welcome to your favourite books club!</div>
      <div className="container">
        <div className="search">
          <div className="input-text">
            <TextField
              fullWidth
              label="Title"
              id="fullWidth"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: 100, padding: 1, margin: 1 }}
              onClick={search}
            >
              Search
            </Button>
          </div>
          <div className="adjust">
            {data.map((x) => (
              <Link
                to={"/booklist/" + x.name}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ width: 100, padding: 1, margin: 1 }}
                >
                  {x.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
