import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import PostForm from "../components/postform";

function Write() {
  return (
    <>
      <Navbar />
      <Layout>
        <PostForm />
      </Layout>
    </>
  );
}

export default Write;
