import React from "react";
import { BlogsFormPage } from "./_components/blog_form";
import { db } from "@/lib/db";
import { Blogs } from "@prisma/client";

const BlogContentPage = async ({ params }: { params: { blogid: string } }) => {
  let blog: Blogs | null = null;

  if (params.blogid !== "new") {
    blog = await db.blogs.findUnique({
      where: {
        id: params.blogid,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BlogsFormPage initialData={blog ? blog : null} />
      </div>
    </div>
  );
};

export default BlogContentPage;
