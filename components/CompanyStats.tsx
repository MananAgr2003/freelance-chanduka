import { title } from "process";

export default function CompanyStats() {
  const stats = [
    {
      value: "86%",
      title: "Cases solved",
    },
    {
      value: "2512",
      title: "Projects",
    },
    {
      value: "93%",
      title: "Happy clients",
    },
    {
      value: "79%",
      title: "Yearly profit",
    },
  ];

  return (
    <section className="bg-bgPrimary p-12 mb-10">
      <div className="md:w-[1100px] mx-auto flex flex-wrap">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-white w-1/2 md:w-1/4 ${
              index !== stats.length - 1 ? "border-r" : ""
            }`}
          >
            <h1 className="text-5xl">{stat.value}</h1>
            <p className="text-lg">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
