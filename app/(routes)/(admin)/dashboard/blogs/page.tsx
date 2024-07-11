import React from "react";
import { BlogsClientPage } from "./_components/client";

const BlogsPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BlogsClientPage data={[]} />
      </div>
    </div>
  );
};

export default BlogsPage;
