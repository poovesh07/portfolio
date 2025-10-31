import React from "react";
import { SiReact, SiWordpress } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/CSS-Logo.png";
import "../App.css";


const specializationData = [
  {
    icon: <img src={htmlLogo} alt="HTML Logo" className="w-7 h-7" />,
    title: "HTML",
    description:
      "Building the structural foundation of web pages using clean, semantic, and accessible HTML5 code.",
    projects: "",
  },
  {
    icon: <img src={cssLogo} alt="CSS Logo" className="w-7 h-7" />,
    title: "CSS",
    description:
      "Designing responsive, visually appealing web layouts using CSS3, Flexbox, and Grid — ensuring cross-device compatibility.",
    projects: "",
  },
  {
    icon: <FaCode size={28} />,
    title: "JavaScript",
    description:
      "Writing clean and efficient JavaScript code for interactive, high-performance web applications using modern ES6+ features.",
    projects: "",
  },
  {
    icon: <SiReact size={28} />,
    title: "React JS",
    description:
      "Building dynamic, component-driven UIs with React. Expertise in hooks, props, state management, and performance optimization.",
    projects: "",
  },

];



const Specialization = () => {
  return (
    <div id="specialization" className="bg-[#0C0711] pb-16 pt-8 px-6 sm:px-10 text-white ">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="font-sora text-[32px] leading-[42px] md:text-[46px] font-medium gradient-text">
          My Specialization
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {specializationData.map((item, index) => (
          <div
            key={index}
            className="rounded-[10px] hov-border flex flex-col gap-4"
          >
            <div className="px-6 py-4 bg-[#2A1454] rounded-t-[10px]">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-md"
                style={{
                  background: 'linear-gradient(315deg, #2A1454 11.52%, #8750F7 91.55%)',
                }}
              >
                {item.icon}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-sora text-white text-[24px] leading-[29px]">{item.title}</h3>
              <p className="font-sora font-light text-[16px] leading-[24px] pt-4 pb-6 text-white">{item.description}</p>
              <p
                className="font-sora font-normal text-[16px] leading-[24px] uppercase underline decoration-solid underline-offset-0 decoration-[0px] skip-ink-auto"
              >
                {item.projects.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialization;
