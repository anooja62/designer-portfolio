import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-4" id="contact-me">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl  text-center mb-2">Contact me</h2>
        <p className="text-center text-gray-400 mb-10">
          Cultivating Connections: Reach Out And{" "}
          <span className="text-orange-500 font-medium">Connect</span> With  <span className="text-orange-500 font-medium">Me</span>
        </p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left Column Inputs */}
          <input
            type="text"
            placeholder="Name"
            className="bg-[#1f1f1f] text-gray-500 px-4 py-3 rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[#1f1f1f] text-gray-500 px-4 py-3 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-[#1f1f1f] text-gray-500 px-4 py-3 rounded-md outline-none"
          />
          <select
            className="bg-[#1f1f1f] text-gray-500 px-4 py-3 rounded-md outline-none appearance-none"
          >
            <option>Service Of Interest</option>
            <option>Website Design</option>
            <option>App UI/UX</option>
            <option>Branding</option>
            <option>Consultation</option>
          </select>
          <div className="sm:col-span-2 flex gap-6 items-start">
  <input
    type="text"
    placeholder="Timeline"
    className="w-1/2 bg-[#1f1f1f] text-gray-500 px-4 py-3 rounded-md outline-none"
  />
  <textarea
    rows="4"
    placeholder="Project Details..."
    className="w-1/2 bg-[#1f1f1f] text-gray-500 px-4 py-3 rounded-md outline-none resize-none"
  ></textarea>
</div>


        </form>

        <div className="text-right mt-8">
  <button className="border border-white px-6 py-2 rounded-md hover:bg-orange-500 transition">
    Send
  </button>
</div>

      </div>
    </section>
  );
};

export default ContactSection;
