"use server";

import { getUserSession } from "@/halpers/getUserSession";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
  const session = await getUserSession();
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedBlog = {
    authorId: session?.user.id,
    title: blogInfo.title,
    content: blogInfo.content,
    Thumbnail: blogInfo.Thumbnail,
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    IsFeatured: Boolean(blogInfo.IsFeatured),
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(modifiedBlog),
  });

  const result = await res.json();
  if (result?.id) {
    revalidateTag("BLOGS");
    redirect("/blogs");
  }
  return result;
};
