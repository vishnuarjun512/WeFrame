import React, { Suspense, lazy } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HeadStats from "./components/HeadStats";
const TopArticles = lazy(() => import("./components/TopArticles"));
const TopStories = lazy(() => import("./components/TopStories"));
const Advertisement = lazy(() => import("./components/Advertisement"));

const page = () => {
  return (
    <div>
      <Sidebar />
      <div className="h-full ml-[18%] p-5 bg-[#F0F0F0]">
        <Header />
        <HeadStats />
        <Suspense fallback={<div>Loading...</div>}>
          <TopArticles />
          <TopStories />
          <Advertisement />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
