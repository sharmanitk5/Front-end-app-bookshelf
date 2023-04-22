import React, { useEffect, useState } from "react";

import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FileUpload from "./FileUpload/FileUpload";

export default function Addbooks() {
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Image, setImage] = useState("");

  const [Price, setPrice] = useState("");
  const [Rating, setRating] = useState("");
  const [Description, setDescription] = useState("");
  const [err, setErr] = useState("");

  let addBooks = () => {
    const data = {
      Title,
      Author,
      Image,
      Price,
      Rating,
      Description,
      userid: localStorage.getItem("userid"),
    };
    fetch(process.env.REACT_APP_BASE_URL + "/addbooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 401) {
          setErr("Not authorized");
        }
        return res.json();
      })
      .then((response) => {
        setTitle("");
        setAuthor("");
        setDescription("");
        setPrice("");
        setRating("");
      })
      .catch((error) => {
        setErr("Not authorzied");
      });
  };
  return (
    <>
      {err ? (
        <h1>{err}</h1>
      ) : (
        <div>
          <h1>Addbooks</h1>

          <div>
            <div className="input">
              <TextField
                label="Title"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
              ></TextField>
            </div>
            <div className="input">
              <TextField
                color="secondary"
                label="Author"
                value={Author}
                onChange={(e) => setAuthor(e.target.value)}
              ></TextField>
            </div>
            <div className="input">
              <TextField
                color="secondary"
                label="Description"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              ></TextField>
            </div>
            <div className="input">
              <TextField
                color="secondary"
                label="Price"
                value={Price}
                onChange={(e) => setPrice(e.target.value)}
              ></TextField>
            </div>
            <div>
              <TextField
                label="Rating"
                value={Rating}
                onChange={(e) => setRating(e.target.value)}
              ></TextField>
            </div>
            <div>
              <FileUpload />
            </div>
            <Button variant="contained" sx={{ margin: 1 }} onClick={addBooks}>
              Add book
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
