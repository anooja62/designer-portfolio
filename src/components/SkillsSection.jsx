import { FaFigma } from 'react-icons/fa';
import { SiAdobexd, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro } from 'react-icons/si';

const skillIcons = {
  figma: <FaFigma className="text-white text-3xl" />,
  xd: <SiAdobexd className="text-white text-3xl" />,
  ai: <SiAdobeillustrator className="text-white text-3xl" />,
  ps: <SiAdobephotoshop className="text-white text-3xl" />,
  pr: <SiAdobepremierepro className="text-white text-3xl" />,
};

const SkillsSection = ({ skills }) => {
  return (
    <div className="flex flex-wrap justify-center gap-20 mt-10">
      {skills.map((skill, index) => {
        const progress = skill.value;
        const dashOffset = 280 - (280 * progress) / 100; 

        return (
          <div key={index} className="flex flex-col items-center text-gray-500">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="44"
                  stroke="#2d2d2d"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="44"
                  stroke="#f97316"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="280"
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                {skillIcons[skill.icon]}
              </div>
            </div>
            <p className="text-orange-500 font-bold mt-2">{skill.value}%</p>
            <p className="text-sm mt-1 text-gray-400">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSection;
