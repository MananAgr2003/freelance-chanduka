export default function ProductionSolutions() {
  return (
    <section className="px-10 py-16">
      <div className="md:w-[1100px] mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h4 className="text-sm font-semibold text-indigo-400">QUALITY WORK</h4>
        <h2 className="text-4xl font-bold mt-2">
          We develop top production solutions
        </h2>
        <p className="mt-4 text-gray-400">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
        </p>

        <div className="mt-6">
          <div className="flex justify-between text-sm font-semibold">
            <span>Automation</span>
            <span>80%</span>
          </div>
          <div className="w-full bg-gray-300 h-2 rounded-full mt-1">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-sm font-semibold">
            <span>Engineering</span>
            <span>90%</span>
          </div>
          <div className="w-full bg-gray-300 h-2 rounded-full mt-1">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
        <img src="/images/production.png" alt="Production Solution" />
      </div>
      </div>
    </section>
  );
}
