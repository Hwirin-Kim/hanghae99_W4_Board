import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};
let number = 0;
const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      console.log(action.payload);
      state.post.push({ ...action.payload, postId: number++ });
      console.log(current(state));
    },
  },
});

export const { addPost } = post.actions;
export default post.reducer;
