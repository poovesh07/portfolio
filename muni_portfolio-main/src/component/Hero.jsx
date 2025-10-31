import React, { useState, useEffect } from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaWhatsapp,
    FaEnvelope,
    FaHome,
    FaFolderOpen,
    FaBriefcase,
    FaPen,
    FaUserGraduate,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import poovesh from "../assets/poovesh.webp";
import topcor from "../assets/top-right.webp";
import "../App.css";

const Hero = () => {
    const [activeSection, setActiveSection] = useState("#home");

    const iconLinks = [
        { icon: <FaHome />, link: "#home", label: "Home" },
        { icon: <FaFolderOpen />, link: "#skills", label: "My Skills" },
        { icon: <FaBriefcase />, link: "#specialization", label: "My Specialization" },
        { icon: <FaPen />, link: "#project", label: "Recent Projects" },
        { icon: <FaUserGraduate />, link: "#education", label: "Education " },
        { icon: <FaEnvelope />, link: "#contact", label: "Contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = iconLinks.map((item) => item.link.replace("#", ""));
            let current = "#home";

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section && scrollPosition >= section.offsetTop - 100) {
                    current = `#${id}`;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="home" className="min-h-screen bg-[#0F0715] text-white flex items-center justify-center px-4 pt-10 md:pt-0 md:px-6 relative scroll-smooth">
            {/* Decorative Image */}
            <img src={topcor} alt="corner" className="absolute top-0 right-0 w-80 h-80" />

            {/* Right-side vertical nav (Desktop) */}
            <div className="hidden md:flex flex-col gap-4 fixed right-2 top-1/2 -translate-y-1/2 z-50">
                {iconLinks.map((item, index) => {
                    const isActive = activeSection === item.link;
                    return (
                        <a
                            key={index}
                            href={item.link}
                            className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all
              ${isActive
                                    ? "bg-[#8750F7] border-white text-white"
                                    : "bg-[#2a1e3f] border-[#8750F7] text-[#a47bff] hover:bg-[#8750F7] hover:text-white"
                                }`}
                        >
                            {item.icon}
                        </a>
                    );
                })}
            </div>

            {/* Bottom mobile nav */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1c112b] border-[#8750F7]">
                <div className="max-w-screen-sm mx-auto flex justify-between px-4 py-3">
                    {iconLinks.map((item, index) => {
                        const isActive = activeSection === item.link;
                        return (
                            <a
                                key={index}
                                href={item.link}
                                className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all
            ${isActive
                                        ? "bg-[#8750F7] border-white text-white"
                                        : "bg-[#2a1e3f] border-[#8750F7] text-[#a47bff] hover:bg-[#8750F7] hover:text-white"
                                    }`}
                            >
                                {item.icon}
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Hero Content */}
            <div className="bg-[#140C1C] border border-[#3d2456] rounded-3xl md:p-10 p-4 pb-10 flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full shadow-xl">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <img
                        src={poovesh}
                        alt="Profile"
                        className="w-64 h-64 rounded-2xl object-cover hidden md:block"
                    />
                </div>

                {/* Text */}
                <div>
                    <h1 className="font-sora text-[36px] leading-[46px] md:text-[56px] font-medium gradient-text md:leading-tight">
                        Hi, I am Poovesh – FrontEnd Developer
                    </h1>
                    <img
                        src={poovesh}
                        alt="Profile"
                        className="w-64 h-64 rounded-2xl object-cover mt-8 block md:hidden"
                    />
                    <p className="font-sora font-light text-[16px] leading-[30px] text-[#DDDDDD] pt-6">
                        I’m a passionate Front-End Developer with strong skills in HTML, CSS, JavaScript, React.js, Tailwind CSS, and GitHub.
                        I enjoy building responsive, user-friendly, and visually appealing web applications.
                        My projects include a Food Order App, Weather App, To-Do List, and a Redux Customer Dashboard.
                        I’m eager to grow, learn, and contribute to impactful front-end development projects
                    </p>

                    {/* Button and Social */}
                    <div className="flex items-center gap-4 mt-8 flex-wrap">
                        <a
                            href="/Poovesh_resume.pdf"
                            download="Poovesh_Resume.pdf"
                            className="bg-[#8750F7] hover:bg-white hover:text-[#8750F7] hover:border-2 hover:border-[#8750F7] text-white px-6 py-[20px] rounded-full font-sora font-semibold text-[15px] leading-[15px] shadow-lg transition-all flex items-center gap-2"
                        >
                            Download Resume <FiDownload className="text-[18px]" />
                        </a>

                        <div className="flex flex-wrap gap-4 text-[#a47bff]">
                            {[
                                { icon: <FaGithub />, link: "https://github.com/poovesh07" },
                                { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/poovesh-v-249272281/" },
                                { icon: <FaWhatsapp />, link: "https://wa.me/918015780957" },
                                { icon: <FaEnvelope />, link: "mailto:poovesh057@gmail.com" },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#8750F7] text-xl hover:bg-[#8750F7] hover:text-white transition duration-300"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
