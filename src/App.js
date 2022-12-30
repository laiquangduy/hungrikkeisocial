import "./App.css";
import React, { useState, useEffect } from "react";
import Network from "./components/network/Network";
import Cookie from "js-cookie";
import Tcncontainer from "./components/tcn/Tcncontainer";

const App = () => {
  const [users, setUsers] = useState([]);
  const [friendadd, setFriendadd] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/v1/friends/${Cookie.get("userID")}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFriendadd(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/v1/users`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(users);
      });
  }, []);

  const btnAccept = (e) => {
    console.log(e.target.value);
    let backEndUrl = `http://127.0.0.1:8000/user/friends/request/accept/${e.target.value}`;
    e.preventDefault();

    fetch(backEndUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        // Giả lập ở fontend
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const btnremove = (e) => {
    let backEndUrl = `http://127.0.0.1:8000/user/friends/request/remove/${e.target.value}`;
    e.preventDefault();

    fetch(backEndUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        // Giả lập ở fontend
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const btnAdding = (e) => {
    console.log(e.target.value);
    let backEndUrl = `http://127.0.0.1:8000/user/friends/request/${e.target.value}`;
    e.preventDefault();
    fetch(backEndUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        // Giả lập ở fontend
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Network
        btnAccept={btnAccept}
        btnremove={btnremove}
        users={users}
        friendadd={friendadd}
        btnAdding={btnAdding}
      />
      {/* <Tcncontainer /> */}
    </>
  );
};

export default App;
