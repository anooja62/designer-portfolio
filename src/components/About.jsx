import { useEffect, useState } from 'react';
import SkillsSection from './SkillsSection';
import { FiDownload } from 'react-icons/fi';
const skillsData = [
    { name: 'Figma', icon: 'figma', value: 100 },
    { name: 'Adobe XD', icon: 'xd', value: 100 },
    { name: 'Adobe Illustrator', icon: 'ai', value: 85 },
    { name: 'Adobe Photoshop', icon: 'ps', value: 85 },
    { name: 'Adobe Premiere', icon: 'pr', value: 70 }
  ];
export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/about.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <section id="about-me" className="bg-[#121212] text-white px-6 md:px-20 py-16 font-lato">
      <h2 className="text-center text-2xl md:text-3xl mb-2">{data.title}</h2>
      <p className="text-center text-sm text-gray-400 mb-12">
        {data.intro} <span className="text-orange-500">{data.highlight}</span> Who’s Been Shaping
        <span className="text-orange-500"> {data.descriptionHighlight} </span>
        For Over <span className="text-orange-500">{data.years}</span>, Across Apps, Platforms & Industries.
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Placeholder for Image */}
        <div className="w-full md:w-1/2 h-[300px] bg-[#1e1e1e] rounded-t-full"></div>

        {/* Bio */}
        <div className="w-full md:w-1/2 text-sm leading-relaxed text-gray-400">
          <p className="mb-4 font-lato font-normal">{data.bio}</p>
          <a href={data.cvLink} download>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition text-sm flex items-center gap-2">
          <FiDownload size={18} />
          Download CV
        </button>
          </a>
        </div>
      </div>

      {/* Skills */}
      <section className="py-12 px-4">
      <SkillsSection skills={skillsData} />
    </section>
    </section>
  );
}
