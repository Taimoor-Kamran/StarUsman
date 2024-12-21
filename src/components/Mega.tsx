"use client";
import React from "react";
import BlogCard from "../components/BlogCard";
export default function Mega() {
  const post = [
    {
      id: "1",
      title: "AFFILIATE MARKETER",
      description:
        "Affiliate marketing is a performance marketing tactic where a business pays people to promote products. Every time an affiliate brings in a new customer, they receive a commission.",
      date: "2024-11-28",
      image: "../images/affiliatemarketing.png",
    },

    {
      id: "2",
      title: "DIGITAL FREELANCER",
      description:
        "With a digital freelance business, your time is your inventory and your biggest investment. That makes it easy to get up and running if you have in-demand skills and spare hours.",
      date: "2024-11-28",
      image: "../images/di.jpeg",
    },
    {
      id: "3",
      title: "CONTENT CREATOR",
      description:
        "Content creators share videos, stories, and content on social media to build audiences and make money. If your content is received positively, consider turning your social media presence into a business by partnering with brands or by making and selling merch.",
      date: "2024-11-28",
      image: "../images/cc.jpeg",
    },
    {
      id: "4",
      title: "INFLUENCER",
      description:
        "The ability to capture and keep attention is an asset businesses will pay top dollar for. You can become an influencer with a modest amount of followers if you have an engaged niche audience.you choose to grow your following on YouTube, Instagram, TikTok",
      date: "2024-11-28",
      image: "../images/inf.jpeg",
    },
    {
      id: "5",
      title: "SOCIAL MEDIA MANAGMENT CONSULTANT",
      description:
        "If you're social-media-savvy but don't want to create content full-time, consider freelancing as a social media manager or consultant. A social media manager creates and analyzes content for brands' social accounts. ",
      date: "2024-11-28",
      image: "../images/j.jpeg",
    },
    {
      id: "6",
      title: "DROPSHIPPING STORE OWNER",
      description:
        "Dropshipping is one of the quickest and easiest businesses you can start without money. That's because you don't need to handle any products yourself—you only need to make the sales and pass orders on to your dropshipping supplier.",
      date: "2024-11-28",
      image: "../images/d.jpeg",
    },
    {
      id: "7",
      title: "RESUME WRITER",
      description:
        "Résumés are crucial to landing a new job, yet many people struggle to write them. If you excel at writing résumés, you can make a business out of it. Résumé writing and editing are usually performed more quickly than other freelance writing jobs,",
      date: "2024-11-28",
      image: "../images/rw.jpeg",
    },
    {
      id: "8",
      title: "VIRTUAL ASSISTANT",
      description:
        "Virtual assistants help business owners manage tasks they don't have time for. Unlike traditional personal assistants, virtual assistants don't have to be in the same city (or even the same country) as their clients.",
      date: "2024-11-28",
      image: "../images/va.jpeg",
    },
    {
      id: "9",
      title: "DIGITAL DESIGNER",
      description:
        "You don't need to sell physical products to make money as an artist online. You can sell digital products like printable bullet journal templates, sewing patterns,",
      date: "2024-11-28",
      image: "../images/dd.jpeg",
    },
    {
      id: "10",
      title: "ONLINE DATING CONSULTANT",
      description:
        "Consider yourself a matchmaker? Become an online dating consultant and help singles find love. Besides helping create online dating profiles",
      date: "2024-11-28",
      image: "../images/dc.jpeg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        {" "}
        10 Small Business Ideas for Aspiring Entrepreneurs in 2025
      </h1>
      <p className="text-1xl font-bold text-center my-8 text-red-600">
        {" "}
        Looking to launch a new business in 2025? Discover the best small
        business ideas for your niche, budget, and skill set to jump-start your
        entrepreneurial journey.
      </p>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols gap-8">
        {post.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
