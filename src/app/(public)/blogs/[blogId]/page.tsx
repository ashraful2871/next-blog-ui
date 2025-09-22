/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/`);
  const { data: blogs } = await res.json();
  return blogs.slice(0, 2).map((blog: any) => ({
    blogId: String(blog.id),
  }));
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogId}`,
    {
      cache: "no-store",
    }
  );

  const blogData = await res.json();
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h1>Blog Details Page</h1>

      <BlogDetailsCard key={blogData.id} blog={blogData}></BlogDetailsCard>
    </div>
  );
};

export default BlogDetailsPage;
