import NorthSharpIcon from "@mui/icons-material/NorthSharp";

export default function Timeline() {
  const events = [
    { year: "2014", text: "nostrud amet sint do" },
    { year: "2015", text: "Exercitation veniam consequat" },
    { year: "2016", text: "Velit officia consequat duis" },
    { year: "2017", text: "Ullamco est sit aliqua dolor" },
    { year: "2018", text: "Amet minim mollit non deserunt" },
    { year: "2019", text: "nostrud amet sint do" },
    { year: "2020", text: "Exercitation veniam consequat" },
    { year: "2021", text: "Velit officia consequat duis" },
    { year: "2022", text: "Ullamco est sit aliqua dolor" },
    { year: "2023", text: "Amet minim mollit non deserunt" },
  ];

  return (
    <>
    <section className="px-10 pt-24 pb-32">

        <h2 className="text-3xl font-bold text-center mb-16">Our 30+ Years Of Record</h2>

    <div className="flex flex-col items-center p-8">
      <div className="relative flex">
        {/* <div className="absolute left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2" /> */}
        {events.map((event, index) => (
          <div
            key={event.year}
            className={`flex ${
              index % 2 === 0 ? "flex-col-reverse" : "flex-col"
            } items-center`}
          >
            {index % 2 === 0 ? (
              <div className="flex flex-col gap-5 items-center pt-5 h-24">
                <img src="/images/line-down.png" alt="" />
                <p className="text-gray-600 text-sm text-center flex items-center">
                  {event.text}
                </p>
              </div>
            ) : (
              <div className="flex flex-col-reverse gap-5 items-center pb-5 h-24">
                <img src="/images/line-up.png" alt="" />
                <p className="text-gray-600 text-sm text-center flex items-center">
                  {event.text}
                </p>
              </div>
            )}
            <div className="w-full items-center flex relative z-10">
              <hr
                className={`${
                  index !== 0 ? "border-bgPrimary" : "border-transparent"
                } flex-1`}
              />
              <div className="w-8 h-8 bg-blue-500 border-4 border-white rounded-full shadow-md" />
              <hr
                className={`${
                  index !== events.length - 1
                    ? "border-bgPrimary"
                    : "border-transparent"
                } flex-1`}
              />
            </div>

            {index % 2 === 0 ? (
              <h3 className="text-blue-600 font-bold text-lg h-24 flex items-end">
                {event.year}
              </h3>
            ) : (
              <h3 className="text-blue-600 font-bold text-lg h-24 flex items-start">
                {event.year}
              </h3>
            )}
          </div>
        ))}
      </div>
    </div>

    </section>
    
    </>
  );
}
