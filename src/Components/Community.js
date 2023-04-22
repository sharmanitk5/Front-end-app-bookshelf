import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Community() {
  const [FriendsName, setFriendsName] = useState("");
  const [Friendsemail, setFriendsEmail] = useState("");
  const [err, setErr] = useState("");
  const [friend, setFriend] = useState("");
  const navigate = useNavigate();

  let addfriend = () => {
    let data = {
      FriendsName,
      Friendsemail,
      userid: localStorage.getItem("userid"),
    };
    fetch(process.env.REACT_APP_BASE_URL + "/addfriends", {
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
        setFriendsEmail("");
        setFriendsName("");
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
          <h1>Add Friends</h1>
          <div className="community">
            <TextField
              label="FriendName"
              value={FriendsName}
              onChange={(e) => setFriendsName(e.target.value)}
            ></TextField>
          </div>
          <div>
            <TextField
              label="Friendemail"
              value={Friendsemail}
              onChange={(e) => setFriendsEmail(e.target.value)}
            ></TextField>
          </div>
          <div>
            <Button variant="contained" sx={{ margin: 1 }} onClick={addfriend}>
              Add
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
