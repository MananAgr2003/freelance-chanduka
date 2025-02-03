export default function ValueCreation() {
  return (
    <section className="py-16 px-8 pb-64 bg-neutral-100 text-gray-900">
      <div className="md:w-[1100px] mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Left Side - Image Content */}
        <div className="md:w-1/2">
          <div className="relative w-full">
            <img
              src="/images/value-creation.png"
              alt="Value Creation"
              className="w-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-center p-4 text-white ">
              <h3 className="text-lg font-semibold">Foundry</h3>
              <button className="text-bgPrimary font-semibold bg-white px-4 py-2 mt-2">
                Check Out Products
              </button>
            </div> */}
          </div>
        </div>

        {/* Right Side - Text content */}
        <div className="md:w-1/2">
          {/* <div>
            

          </div> */}

          <h3 className="text-sm font-semibold text-neutral-600 uppercase">
            About us
          </h3>
          <h2 className="md:text-5xl text-4xl font-bold text-bgDark mt-2">
            Creating value by honing the process
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <ul className="list-none text-neutral-700 mt-8 mb-8">
            <li className="tracking-wide">Mon-Fri: 9 AM – 22 PM</li>
            <li className="tracking-wide">Saturday: 9 AM – 20 PM</li>
          </ul>

          <a
            //   href="#about"
            className="px-6 py-3 bg-bgPrimary hover:bg-blue-700 text-white font-semibold uppercase shadow-md transition duration-300"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
