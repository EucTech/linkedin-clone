import PostFeed from "@/components/Feed/PostFeed";
import SidebarLeft from "@/components/Feed/SidebarLeft";
import SidebarRight from "@/components/Feed/SidebarRight";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex items-start justify-between px-10 py-5">
      <SidebarLeft />
      <PostFeed />
      <SidebarRight />
    </div>
  );
};

export default page;
