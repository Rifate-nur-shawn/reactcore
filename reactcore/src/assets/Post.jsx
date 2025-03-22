import { useEffect, useState } from "react";
import PostData from "./PostData";
import "./Friends.css";

export default function Post() {
  const [Post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="box">
      <h3>Posts: {Post.length}</h3>
      {Post.map((post) => (
        <PostData key={post.id} PostData={post}></PostData>
      ))}
    </div>
  );
}
// create a state to store data
// create effect with no dependency
// use fetech to load data
