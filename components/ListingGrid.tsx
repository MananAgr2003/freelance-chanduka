export default function ListingGrid() {
    const items = [
      {
        image: "/images/steel-coils.png", // Update with actual image path
        title: "Tanker",
        description:
          "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
      },
      {
        image: "/images/steel-coils.png",
        title: "Tanker",
        description:
          "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
      },
      {
        image: "/images/steel-coils.png",
        title: "Tanker",
        description:
          "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
      },
      {
        image: "/images/steel-coils.png",
        title: "Tanker",
        description:
          "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
      },
      {
        image: "/images/steel-coils.png",
        title: "Tanker",
        description:
          "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
      },
      {
        image: "/images/steel-coils.png",
        title: "Tanker",
        description:
          "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
      },
      {
        image: "/images/steel-coils.png",
        title: "Tanker",
        description:
          "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
      },
      {
        image: "/images/steel-coils.png",
        title: "Tanker",
        description:
          "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
      },
    ];
  
    return (
      <div className="lg:w-[1100px] mx-auto p-4 pt-32 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full lg:h-[340px] h-64 object-cover shadow-lg"
              />
              <h3 className="text-neutral-900 text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-neutral-500 text-sm mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  