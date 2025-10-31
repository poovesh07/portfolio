import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../App.css";

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiGithub,
} from "react-icons/si";
import Tailwindlogo from "../assets/Tailwindlogo.png";

const skills = [
    { icon: <SiHtml5 size={50} color="#e34c26" />, label: "HTML", percent: "85%" },
    { icon: <SiCss3 size={50} color="#264de4" />, label: "CSS", percent: "85%" },
    { icon: <SiJavascript size={50} color="#F7DF1E" />, label: "JavaScript", percent: "80%" },
    { icon: <SiReact size={50} color="#61DAFB" />, label: "React", percent: "75%" },
    { icon: <SiGithub size={50} color="#ffffff" />, label: "GitHub", percent: "80%" },
    
{
  icon: <img src={Tailwindlogo} alt="Tailwind CSS" className="w-[50px] h-[50px] object-contain" />,
  label: "Tailwind CSS",
  percent: "70%",
  isImage: true,
},

];

const Skills = () => {
    return (
        <div id="skills" className="bg-[#0C0711] md:pb-16 pb-8  text-white text-center">
            {/* <h2 className="text-4xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
          My Skills
        </span>
      </h2> */}
            <h1 className="font-sora text-[32px] leading-[42px] md:text-[46px] pb-4 md:pb-6 md:pt-0 pt-10 font-medium gradient-text">
                My Skills
            </h1>

            <div className="max-w-7xl mx-auto px-6 pt-6 sm:px-10">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={-30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 6 },
                    }}
                    navigation
                >
                    {skills.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-40 h-40 rounded-[25px] border border-[#2D1B4A] bg-[#0E0816] flex flex-col justify-center items-center space-y-2 transition-all duration-300 group hover:bg-[#1C0F2E] hover:border-[#A259FF] hover:shadow-[0_0_20px_#A259FF]">
                                    <div className="transition-transform duration-300 group-hover:scale-110">
                                        {skill.icon}
                                    </div>
                                    <p className="text-sm font-medium text-gray-400 group-hover:text-[#A259FF] transition-colors duration-300">
                                        {skill.percent}
                                    </p>
                                </div>
                                <p className="font-sora font-normal text-base leading-6 text-center">{skill.label}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Skills;
