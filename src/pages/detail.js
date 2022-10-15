import React from "react";
import DetailPost from "../components/detailpost";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

function Detail() {
  return (
    <>
      <Navbar />
      <Layout>
        <DetailPost />
      </Layout>
    </>
  );
}

export default Detail;
