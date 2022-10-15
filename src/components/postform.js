import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../redux/modules/postSlice";
import Btn from "./button";

function PostForm() {
  const dispatch = useDispatch();
  const initialPost = {
    postId: undefined,
    postTitle: "",
    postContent: "",
  };
  const [post, setPost] = useState(initialPost);
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(`글제목 ${value}`);
    setPost({ ...post, [name]: value });
  };

  const addButton = () => {
    dispatch(addPost({ ...post }));
    alert("작성 완료!");
    navigate("/");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="postTitle"
          onChange={onChangeHandler}
          placeholder="글 제목"
        />
        <Btn title="취소" />
        <Btn title="완료" onClick={addButton} />
      </div>
      <div>
        <textarea
          name="postContent"
          onChange={onChangeHandler}
          placeholder="글 내용"
        />
      </div>
    </div>
  );
}

export default PostForm;
