import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const [realtimePost, loading, erorr] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {realtimePost.docs.map((post) => {
        <Post />;
      })}
    </div>
  );
}

export default Posts;
