import Btn from "./button";

function ReplyForm() {
  return (
    <div>
      <input placeholder="닉네임" />
      <input placeholder="댓글 내용 입력" />
      <Btn title="추가하기" />
    </div>
  );
}

export default ReplyForm;
