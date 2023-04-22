import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

export default function BookList() {
  const navigate = useNavigate();
  const { category } = useParams();

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(process.env.REACT_APP_BASE_URL + "/books/" + category)
      .then((res) => res.json())
      .then((response) => {
        setIsLoading(false);
        setData(response);
      });
  }, []);

  let read = () => {
    navigate("/Signin");
  };

  return (
    <div>
      <h1>Book Results</h1>
      <h4> Category: {category}</h4>
      <hr />
      {data.map((x) => (
        <div>
          <li>
            <h2>Title : {x.name}</h2>
            <div>By : {x.author}</div>
            <div>First published in : {x.publication}</div>
          </li>
          <Button
            variant="contained"
            sx={{ width: 100, padding: 1, margin: 1 }}
            onClick={read}
          >
            Read
          </Button>
        </div>
      ))}
    </div>
  );
}
