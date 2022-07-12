import Head from "next/head";
import React from "react";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      {/* 타이틀이 공유된다. */}
      <meta keyword={keyword} />
      <meta content={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "My Blog powered by Next js",
  contents: "practice next js",
};

export default HeadInfo;
