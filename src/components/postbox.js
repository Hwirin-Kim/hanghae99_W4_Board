import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const StPostBox = styled.div`
  width: 250px;
  height: 300px;
  border: 3px solid black;
  margin: 10px;
`;

const StTitle = styled.div`
  height: 40px;
  width: 250px;
  border: 1px solid black;
  background-color: grey;
`;

const StContent = styled.div`
  height: 226px;
  width: 250px;
  border: 1px solid black;
`;
const StReply = styled.div`
  height: 30px;
  width: 250px;
  border: 1px solid black;
  background-color: skyblue;
`;
function PostBox({ a }) {
  const navigate = useNavigate();

  return (
    <StPostBox onClick={() => navigate(`/detail/${a.postId}`)}>
      <StTitle>{a.postTitle}</StTitle>
      <StContent>{a.postContent}</StContent>
      <StReply>댓글 아이콘 댓글갯수</StReply>
    </StPostBox>
  );
}

export default PostBox;
