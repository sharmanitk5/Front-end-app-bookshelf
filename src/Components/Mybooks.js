import React, { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import Community from "./Community";
import Bookscollection from "./Bookscollection";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
export default function Mybooks() {
  const [infobooks, setinfobooks] = useState([]);
  const [error, setError] = useState(null);

  let userid = localStorage.getItem("userid");
  if (!userid) {
    setError("Not authorized");
  }
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/addbooks/${userid}`, {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error("Not authorized");
        }
        return res.json();
      })

      .then((response) => {
        setinfobooks(response);
        //   const something = response.map((x) => x._id);

        //   localStorage.setItem("bookids", JSON.stringify(something));
        localStorage.setItem("bookid", response[0]._id);
      })
      .catch((error) => {
        setError("OOPs! An error occured while fetching data");
      });
  }, []);

  const deletebooks = (bookid) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/${bookid}/delete`, {
      method: "DELETE",
    }).then((res) => console.log(res));

    // .then((response) => {
    //   // fetch updated list of books from API
    //   fetch(`${process.env.REACT_APP_BASE_URL}/addbooks`, {
    //     method: "GET",
    //     headers: {
    //       token: localStorage.getItem("token"),
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((response) => setinfobooks(response));
    // });
  };

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : (
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

            <Button
              variant="contained"
              sx={{ width: 100, padding: 1, margin: 1, float: "left" }}
            >
              My Books
            </Button>
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
            {infobooks.map((x) => (
              <Bookscollection
                image={x.Image}
                title={x.Title}
                author={x.Author}
                description={x.Description}
                price={x.Price}
                rating={x.Rating}
                deletebooks={deletebooks}
              ></Bookscollection>
            ))}
          </div>
        </>
      )}
    </>
  );
}
