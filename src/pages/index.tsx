import React from "react";
import { Demo } from "../common/demo";
import { Instructions } from "../common/instructions";
import { WhyUse } from "../common/why-use";
import { Layout } from "../_layout";
export default function Home() {
  return (
    <Layout>
      <Demo />
      <WhyUse />
      <Instructions />
    </Layout>
  );
}
