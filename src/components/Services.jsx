import { useEffect, useState } from 'react';
import { UserCircle2 } from 'lucide-react'; // placeholder icon

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/data/services.json')
      .then(res => res.json())
      .then(setServices)
      .catch(err => console.error("Failed to load services:", err));
  }, []);

  return (
    <section className="bg-[#121212] text-white py-16 px-6 font-lato" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl  mb-2">Services</h2>
        <p className="text-sm text-gray-400 mb-10">
          <span className="text-orange-500 font-medium">Crafting</span> Seamless Experiences from <span className="text-orange-500 font-medium">Idea </span>to <span className="text-orange-500 font-medium">Interface</span>
        </p>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="bg-[#1c1c1c] p-6 rounded-lg text-center shadow hover:shadow-lg transition">
              <UserCircle2 className="mx-auto text-orange-500 mb-4" size={36} />
              <h3 className="text-orange-500 font-semibold mb-2 font-lato">{service.title}</h3>
              <ul className="text-sm text-gray-500 space-y-1 font-lato">
                {service.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
