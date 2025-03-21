import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend.jsx";
export default function Friends() {
  const [Friends, setFriends] = useState([]);

  useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setFriends(data));
    }, []);

  return (
    <div className="box">
      <h2>Friends: {Friends.length} </h2>
      {
        Friends.map(friend => <Friend friend ={friend}></Friend>)
      }
    </div>
  );
}
