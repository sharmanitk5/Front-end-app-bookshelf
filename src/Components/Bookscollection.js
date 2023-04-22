import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { Avatar, Button } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { TextField } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
export default function Bookscollection({
  image,
  title,
  author,
  description,
  price,
  rating,
  deletebooks,
}) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState();
  const [allcomments, setAllcomments] = useState([""]);
  const [appear, setAppear] = useState(false);
  const [error, setError] = useState();
  const bookid = localStorage.getItem("bookid");
  const userid = localStorage.getItem("userid");
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/addlikes/${bookid}/likes`)
      .then((res) => {
        if (res.status === 401) {
          setError("No data found");
        }
        return res.json();
      })
      .then((response) => setLikes(response))
      .catch((err) => {
        setError("No data");
      });
  }, []);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/addcomments/${bookid}`)
      .then((res) => res.json())
      .then((response) => setAllcomments(response));
  }, []);
  const toggle = () => {
    setAppear(!appear);
  };
  const like = () => {
    setLikes(likes + 1);
    fetch(`${process.env.REACT_APP_BASE_URL}/addlikes/${bookid}/likes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    });
  };
  let newcomment = () => {
    let commentdata = {
      bookid: bookid,
      userid: userid,
      comments: comments,
    };

    fetch(`${process.env.REACT_APP_BASE_URL}/addcomments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentdata),
    });
    setAppear(!appear);
  };

  return (
    <>
      <div className="mainbook">
        <div>
          <b>Title</b>: {title}
        </div>
        <div>
          <b>Author</b>: {author}
        </div>
        <div>
          <b>Description</b>: {description}
        </div>
        <div>
          <b>Price</b>: {price}
        </div>
        <div>
          <Rating name="half-rating" defaultValue={rating} />
        </div>
        <div>
          <span>
            <ThumbUpOffAltIcon onClick={like}></ThumbUpOffAltIcon>
            {likes}
          </span>

          <span>
            <ChatBubbleOutlineIcon onClick={toggle}></ChatBubbleOutlineIcon>
            {allcomments.length}
          </span>

          <Button
            variant="contained"
            sx={{ width: 100, padding: 1, margin: 1, float: "left" }}
            onClick={() => deletebooks(bookid)}
          >
            Delete
          </Button>
        </div>
        {appear ? (
          <div style={{ marginTop: 10 }}>
            <TextField
              label="Add a comment"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></TextField>
            <Button
              variant="contained"
              sx={{ width: 100, padding: 1, margin: 1 }}
              onClick={newcomment}
            >
              post
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>

      {appear ? (
        <div style={{ float: "left", marginTop: 40 }}>
          <h2 style={{ marginLeft: 37 }}>Comments by user</h2>{" "}
          {allcomments.map((x) => (
            <li>{x.comments}</li>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
