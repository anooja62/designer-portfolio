export default function Header() {
    return (
      <header className="bg-[#121212] text-white px-6 py-20 font-lato">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="flex-1">
            <p className="text-sm mb-2">Hi, I'm</p>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Sidharth Sasidharan</h1>
        
            <h2 className="text-2xl md:text-4xl font-bold text-orange-500 leading-snug mt-4">
              Designing Intuitive Experiences<br />
              That Connect People and<br />
              Products
            </h2>
            <p className="text-sm text-gray-400 mt-6 max-w-lg">
              A Product Designer bridging the gap between user needs and <br />business goals, currently based in Germany
            </p>
  
            {/* Stats */}
            <div className="bg-[#1f1f1f] rounded-lg w-full max-w-xl mt-10 flex justify-between text-white divide-x divide-gray-700 overflow-hidden">

  {/* Experience */}
  <div className="flex-1 py-6 px-4 flex flex-col items-center">
    <p className="text-orange-500 font-bold text-lg">5+</p>
    <p className="text-sm mt-1">Experiences</p>
  </div>

  {/* Project Done */}
  <div className="flex-1 py-6 px-4 flex flex-col items-center">
    <p className="text-orange-500 font-bold text-lg">14+</p>
    <p className="text-sm mt-1">Project done</p>
  </div>

  {/* Happy Clients */}
  <div className="flex-1 py-6 px-4 flex flex-col items-center">
    <p className="text-orange-500 font-bold text-lg">45+</p>
    <p className="text-sm mt-1">Happy Clients</p>
  </div>
</div>

  
            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition">
                Hire Me
              </button>
              <button className="border border-gray-500 text-gray-400 px-5 py-2 rounded hover:bg-gray-700 transition">
                Download CV
              </button>
            </div>
          </div>
  
          {/* Right Section (circle placeholder) */}
          <div className="hidden md:block flex-1">
            <div className="w-72 h-72 rounded-full bg-[#1f1f1f] mx-auto" />
          </div>
        </div>
      </header>
    );
  }
  