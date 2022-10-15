import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReplyForm from "./replyform";
import ReplyList from "./replylist";

function DetailPost() {
  const params = useParams("id").id;
  console.log(params);
  const posts = useSelector((state) => {
    return state.post.post;
  });
  const post = posts.filter((a) => {
    return a.postId == params;
  });
  console.log(post);
  return (
    <>
      <StContainer>
        <StTitle>{post[0].postTitle}</StTitle>
        <StContent>{post[0].postContent}</StContent>
        <StReply>
          <ReplyForm></ReplyForm>
          <ReplyList></ReplyList>
        </StReply>
      </StContainer>
    </>
  );
}

const StContainer = styled.div`
  border: 1px solid black;

  height: 600px;
  width: 90%;
`;

const StTitle = styled.div`
  height: 100px;
`;

const StContent = styled.div`
  background-color: skyblue;
  height: 400px;
`;
const StReply = styled.div`
  background-color: yellowgreen;
  height: 100px;
`;
export default DetailPost;
