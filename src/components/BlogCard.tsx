'use client';
import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/Card";
interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  function newDate(date: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      }
    rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {""}
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description} </p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 text-white bg-red-700 rounded hover:bg-green-700 ${
            isDarkBackground
              ? "bg-black hover:bg-green-700"
              : "bg-black hover:bg-green-700"
          }`}
        >
          READ MORE
        </a>
      </div>
    </Card>
  );
}
