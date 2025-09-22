/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";

export const metadata = {
  title: "All Blog | Next Blog",
};

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
    cache: "no-store",
  });
  const { data: blogs } = await res.json();
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>

      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto my-5">
        {blogs.map((blogs: any) => (
          <BlogCard key={blogs.id} post={blogs}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
