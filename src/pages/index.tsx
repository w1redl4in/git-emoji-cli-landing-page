import React from "react";
import { Demo } from "../common/demo";
import { Instructions } from "../common/instructions";
import { Features } from "../common/features";
import { Layout } from "../_layout";
export default function Home() {
  return (
    <Layout>
      <Demo />
      <Features />
      <Instructions />
    </Layout>
  );
}
