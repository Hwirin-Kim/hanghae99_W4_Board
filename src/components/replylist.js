import Btn from "./button";

function ReplyList() {
  return (
    <div>
      <div>닉네임</div>
      <div>댓글내용</div>
      <Btn title="댓글 수정" />
      <Btn title="댓글 삭제" />
    </div>
  );
}

export default ReplyList;
