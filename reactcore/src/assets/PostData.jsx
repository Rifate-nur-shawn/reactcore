export default function PostData({ PostData }) {
  const { userId, id, title, body } = PostData;
  return (
    <div className="box">
      <h3>User id: {userId} </h3>
      <p>id: {id}</p>
      <p>Title: {title} </p>
      <p>Body: {body}</p>
    </div>
  );
}
