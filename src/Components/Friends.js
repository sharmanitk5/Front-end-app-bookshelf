import React, { useEffect, useState } from "react";

export default function Friends() {
  const [friend, setFriend] = useState([]);
  const [error, setError] = useState();
  const userid = localStorage.getItem("userid");
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/addfriends/${userid}`, {
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

      .then((response) => setFriend(response))

      .catch((error) => {
        setError("OOPs! An error occured while fetching data");
      });
  }, []);

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <h1> My friends</h1>

          {friend.map((x) => (
            <div>{x.FriendsName}</div>
          ))}
        </div>
      )}
    </>
  );
}
