"use client";

export default function LatestNews() {
  const articles = [
    {
      title: "New technologies in the factory of the future",
      category: "MANUFACTURE",
      date: "June 8, 2022",
      comments: "1 Comment",
      image: "/images/news-1.png",
    },
    {
      title: "The highest-paying manufacturing jobs",
      category: "MANUFACTURE",
      date: "June 8, 2022",
      comments: "0 Comments",
      image: "/images/news-1.png",
    },
    {
      title: "What it takes to be a professional metallurgist",
      category: "MANUFACTURE",
      date: "June 8, 2022",
      comments: "0 Comments",
      image: "/images/news-1.png",
    },
  ];

  return (
    <section className="text-white md:w-[1100px] mx-auto py-12 md:px-6 px-4">
      <div className="text-center mb-8">
        <p className="text-sm text-black uppercase">From Our Blog</p>
        <h2 className="text-3xl font-bold text-neutral-700">Our latest news</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="">
            <img
              src={article.image}
              alt={article.title}
              className="w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-neutral-800 uppercase">
                {article.category}
              </p>
              <h3 className="text-lg font-semibold text-neutral-600">
                {article.title}
              </h3>
              <p className="text-xs text-neutral-400">
                {article.date} • {article.comments}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
