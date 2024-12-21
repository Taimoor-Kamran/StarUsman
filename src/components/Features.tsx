import React from "react";

export default function Features() {
  return (
    <div>
      <title>Usman Shafiq Bussiness Blog </title>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2 className="text-center text-5xl font-bold md:text-7xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:tranalate-y-[-5px] hover:text-green-700 text-red-700 ">
          USMAN SHAFIQ BUSSINESS BLOG
        </h2>
        <p className="text-center mb-4 mt-4 text-2xl text-green-700 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          {" "}
          Thinking about starting a business this year?
          <br />
          Whether you're diving into full-time entrepreneurship or planning a
          side hustle,
          <br /> this list of 10 small business ideas is for you. <br />
          Each idea below is practicaland flexible, with proven potential for
          success.
          <br /> Whether you start a clothing line, pet business, or wellness
          brand, <br />
          put your spin on one of these businesses to unlock financial growth.
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-2 animate-fade-in-up delay-100">
          {[
            "AFFILIATE MARKETER",
            "DIGITAL FREELANCER",
            "CONTENT CREATOR",
            "INFLUENCER",
            "SOCIAL MEDIA MANAGMENT CONSULTANT",
            "DROPSHIPPING STORE OWNER",
            "RESUME WRITER",
            "VIRTUAL ASSISTANT",
            "DIGITAL DESIGNER",
            "ONLINE DATING CONSULTANT",
          ].map((category, index) => (
            <div
              key={index}
              className="relative group p-6 bg-green-700 rounded-lg shadow-lg hover:bg-red-700 hover:text-white transition duration-300 ease-in-out transform hover:scale_105 cursor-pointer flex items-center justify-center text-white "
            >
              <p className="text-center text-3xl font-extrabold">{category}</p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
            </div>
          ))}
        </div>
        <br />
        <div>
          <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:tranalate-y-[-5px] hover:text-green-700 text-red-700 ">
            Qualities of a good small business idea
          </h1>
          <p className="text-center mb-4 mt-4 text-2xl text-green-700 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
            Your small business idea should fit your budget, skills, and
            schedule.
            <br /> It should also meet a market need and have the potential to
            generate sustainable, long-term profit.
            <br />
            Here's a closer look at what makes a strong small business idea:
          </p>

          <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:tranalate-y-[-5px] hover:text-green-700 text-red-700 ">
            Meets market demand
          </h1>
          <p className="text-center mb-4 mt-4 text-2xl text-green-700 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
            Good small business ideas solve problems for specific groups of
            people. <br />
            Before moving forward with an idea, research your target market,
            customer needs, and competitors' solutions.
            <br /> Study your industry's market trends, customer surveys, and
            sales data to see what consumers and businesses are doing.
          </p>
          <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:tranalate-y-[-5px] hover:text-green-700 text-red-700 ">
            Conveys a competitive advantage
          </h1>
          <p className="text-center mb-4 mt-4 text-2xl text-green-700 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
            How you meet market demand also matters.
            <br /> Competitive businesses often have original approaches that
            set them apart.
            <br /> This could be a new product, a unique selling proposition, or
            a competitive pricing strategy.
            <br /> Analyze your competitors to understand their strengths and
            weaknesses, and develop a business plan that capitalizes on any
            gaps.
          </p>
          <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:tranalate-y-[-5px] hover:text-green-700 text-red-700 ">
            Is scalable
          </h1>
          <p className="text-center mb-4 mt-4 text-2xl text-green-700 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
            Scalability is about the potential for growth and expansion. <br />
            Can your business idea grow without hitting geographical, financial,
            or market limits? <br />
            Many scalable businesses leverage ecommerce platforms to reach
            global audiences without a physical investment.
          </p>
          <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:tranalate-y-[-5px] hover:text-green-700 text-red-700 ">
            Has a low barrier to entry
          </h1>
          <p className="text-center mb-4 mt-4 text-2xl text-green-700 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
            Businesses are easier to start with lower initial costs, fewer
            regulatory requirements, less need for specialized training, and
            minimal technology needs.
            <br /> For example, business ideas like creating freelance content
            or opening a dropshipping store require minimal setup and no upfront
            capital.
          </p>
          <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:tranalate-y-[-5px] hover:text-green-700 text-red-700 ">
            Demonstrates potential for profitability
          </h1>
          <p className="text-center mb-4 mt-4 text-2xl text-green-700 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
            Ultimately, a small business idea needs to make money. <br />
            Estimate potential profits and build a financial model based on
            predicted sales and operational costs.
          </p>
          <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:tranalate-y-[-5px] hover:text-green-700 text-red-700 ">
            Is sustainable
          </h1>
          <p className="text-center mb-4 mt-4 text-2xl text-green-700 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
            A sustainable business is one with the potential for long-term
            success.
            <br /> Will your small business be part of a growing industry or a
            trend that's already peaked? <br />
            Will your operations align with environmental, social, and
            regulatory expectations? <br />
            Consider the future before launching a new business.
          </p>
        </div>
        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10"></p>
      </section>
    </div>
  );
}
