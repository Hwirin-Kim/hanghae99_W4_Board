import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import PostList from "../components/postList";

function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <PostList />
      </Layout>
    </>
  );
}

export default Home;
