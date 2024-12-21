import React from "react";
import CommentSection from "@/components/CommentsSection";
import AuthorCard from "@/components/AuthorCard";

const posts = [
  {
    id: "1",
    title: "AFFILIATE MARKETER",
    description:
      "Affiliate marketing is a performance marketing tactic where a business pays people to promote products. Every time an affiliate brings in a new customer, they receive a commission.Affiliates can promote products on their blogs, social media accounts, or websites, or in their communities. For many, affiliate marketing is a low-cost way to earn passive income.To join an affiliate program:Find an affiliate program on sites like ShareASale, CJ, or LinkShare.Choose offers you want to promote.Get an affiliate link.Promote that link across your assets.Get a commission for every signup or purchase.Commission rates vary by company and product. You could earn as little as 5% or as much as 50% for each sale. Some affiliate programs offer a flat rate instead of a percentage.",
    date: "2024-11-28",
    image: "../images/affiliatemarketing.png",
  },
  {
    id: "2",
    title: "DIGITAL FREELANCER",
    description:
      "With a digital freelance business, your time is your inventory and your biggest investment. That makes it easy to get up and running if you have in-demand skills and spare hours.If you have expertise in graphic design, search engine optimization, or web development, you could offer your skills as an ongoing service or start a consulting business that advises on projects. To start, create a website and promote your services on platforms like LinkedIn.If you use Shopify, an appointment scheduling app from the Shopify App Store will let prospective clients book time with you directly from your website. And if you want to make passive income, consider offering a digital download on your site. For example, you might sell predesigned templates if you're a graphic designer.",
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
      "The ability to capture and keep attention is an asset businesses will pay top dollar for. You can become an influencer with a modest amount of followers if you have an engaged niche audience.Whether you choose to grow your following on YouTube, Instagram, TikTok, or a blog (or, ideally, on a combination channels), you have many avenues for monetizing your influence:Sponsored posts on behalf of brandsAffiliate marketingExclusive content for members or subscribersTaking an audience-first approach to your small business idea means playing the long game—it might be months until you've figured it out. But you don't need millions of followers to get started.",
    date: "2024-11-28",
    image: "../images/inf.jpeg",
  },
  {
    id: "5",
    title: "SOCIAL MEDIA MANAGMENT CONSULTANT",
    description:
      "If you're social-media-savvy but don't want to create content full-time, consider freelancing as a social media manager or consultant. A social media manager creates and analyzes content for brands' social accounts. Depending on the client's needs, you might help create content, brainstorm content ideas, facilitate partnerships with social media influencers, create a social media content calendar, or formalize a social media strategy.",
    date: "2024-11-28",
    image: "../images/j.jpeg",
  },
  {
    id: "6",
    title: "DROPSHIPPING STORE OWNER",
    description:
      "Dropshipping is one of the quickest and easiest businesses you can start without money. That's because you don't need to handle any products yourself—you only need to make the sales and pass orders on to your dropshipping supplier.Entrepreneur Kamil Sattar (The Ecom King on YouTube) recommends starting with five to 10 low-cost products, a Shopify website, and a TikTok account.I do believe the best opportunity right now in dropshipping is the TikTok Organic Method, Kamil says on theShopify Masters podcast.The profit margins are between 40% to 60%, and you just can't argue with those numbers With Shopify, it's easy to start a dropshipping business. Sell popular products without the hassle of managing inventory, packaging, or shipping. Orders are sent directly to your customers, so you can work on what you do best—reaching your customers.",
    date: "2024-11-28",
    image: "../images/d.jpeg",
  },
  {
    id: "7",
    title: "RESUME WRITER",
    description:
      "Résumés are crucial to landing a new job, yet many people struggle to write them. If you excel at writing résumés, you can make a business out of it. Résumé writing and editing are usually performed more quickly than other freelance writing jobs, so it's a good option for writers looking for a side hustle.In addition to individual sessions, you can sell digital downloads, like a résumé template, job-hunting ebook, or prerecorded résumé writing course on your website. Try promoting your business on LinkedIn to connect with job seekers.",
    date: "2024-11-28",
    image: "../images/rw.jpeg",
  },
  {
    id: "8",
    title: "VIRTUAL ASSISTANT",
    description:
      "Virtual assistants help business owners manage tasks they don't have time for. Unlike traditional personal assistants, virtual assistants don't have to be in the same city (or even the same country) as their clients.Virtual assistant services vary widely and can include social media work, graphic design, general admin, and sales. You can use virtual assistance to make extra income to fund your business idea or grow your virtual assistant business to hire others.Get started as a virtual assistant by promoting yourself on freelance marketplaces like Upwork, Guru, and Fiverr, or join an agency like Time etc, Wing, or Fancy Hands.",
    date: "2024-11-28",
    image: "../images/va.jpeg",
  },
  {
    id: "9",
    title: "DIGITAL DESIGNER",
    description:
      "You don't need to sell physical products to make money as an artist online. You can sell digital products like printable bullet journal templates, sewing patterns, or music.For example, Danish brand Deima Knitwear sells knitting patterns on its Shopify store. Deima also offers a limited number of ready-to-ship and made-to-order pieces to appeal to its audience of knitters and non-knitters alike.Digital products include downloadable templates, journals, checklists, guides, and designs. It's easy to experiment with different product types to see what sells—simply use a design tool like Canva to design your downloads, then sell them on a marketplace like Etsy or start an ecommerce store.",
    date: "2024-11-28",
    image: "../images/dd.jpeg",
  },
  {
    id: "10",
    title: "ONLINE DATING CONSULTANT",
    description:
      "Consider yourself a matchmaker? Become an online dating consultant and help singles find love. Besides helping create online dating profiles, you can source potential matches and offer coaching through first dates. Try it out on willing friends first, then use their success stories to promote your services.You can also generate passive income by creating an online dating course or workbook to sell on your website via Shopify's Digital Downloads app.",
    date: "2024-11-28",
    image: "../images/dc.jpeg",
  },
];

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold  text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {" "}
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}
