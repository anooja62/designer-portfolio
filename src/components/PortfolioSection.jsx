import React, { useEffect, useState } from "react";

const PortfolioSection = () => {
  const [data, setData] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    fetch("/data/portfolioData.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load portfolio data:", err));
  }, []);

  if (!data) return <div className="text-white text-center py-10">Loading...</div>;

  return (
    <section className="bg-[#121212] py-16 px-4 text-white" id="portfolio">
      <h2 className="text-3xl text-center mb-8">{data.title}</h2>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {data.filters.map((filter, idx) => (
          <button
            key={idx}
            onClick={() => setActiveFilter(filter.label)}
            className={`px-5 py-2 rounded-md ${
              activeFilter === filter.label
                ? "bg-orange-500 text-white"
                : "bg-[#1f1f1f] text-gray-400 hover:bg-orange-600"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {data.projects.map((project, idx) => (
          <div key={idx} className="bg-[#1b1b1b] rounded-xl overflow-hidden shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60"
            />
     <div className="p-4 flex justify-between items-center">
  <h3 className="text-gray-300">{project.title}</h3>
  <p className="text-gray-400">{project.category}</p>
</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
