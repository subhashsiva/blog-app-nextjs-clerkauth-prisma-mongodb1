import React from "react";
import { BlogsFormPage } from "./_components/blog_form";

const BlogContentPage = ({ params }: { params: { blogid: string } }) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BlogsFormPage />
      </div>
    </div>
  );
};

export default BlogContentPage;
