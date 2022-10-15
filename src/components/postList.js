import { useSelector } from "react-redux";
import PostBox from "./postbox";

function PostList() {
  const posting = useSelector((state) => {
    console.log("state", state.post.post);
    return state.post.post;
  });
  console.log("posting", posting);
  return (
    <>
      {posting.map((a) => {
        return <PostBox a={a} key={a.postId} />;
      })}
    </>
  );
}

export default PostList;
