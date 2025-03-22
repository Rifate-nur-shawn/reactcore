import "./Post.css";
export default function PostData({ PostData }) {
  const { userId, id, title, body } = PostData;
  return (
    <div className="post">
      <h3>User id: {userId} </h3>
      <p>{id}</p>
      <p>Title: {title} </p>
      <p>Body: {body}</p>
    </div>
  );
}
