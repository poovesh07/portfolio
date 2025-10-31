import React from "react";
import { FiExternalLink, FiEye } from "react-icons/fi";
import { SiReact } from "react-icons/si";
import { foodorder, userform, todolist, redux, weather, expence } from "../assets/images";


const RecentProjects = () => {
  const projects = {
    react: [
      {
        title: "Food Order App",
        image: foodorder,
        tags: ["React", "Frontend"],
        description: [
          "Developed a modern food ordering UI using React. Implemented dynamic menu rendering, cart management with Context API, and responsive layouts using Tailwind CSS.",
        ],
        liveLink: "https://food-app-bog5.vercel.app/",
        codeLink: "https://github.com/poovesh07/Food-app",
      },
      {
        title: "User Form App",
        image: userform,
        tags: ["React", "Forms"],
        description: [
          "Created an interactive user registration form using React and controlled components. Includes real-time validation, form submission handling, and clean responsive UI.",
        ],
        liveLink: "https://user-form-three-nu.vercel.app/",
        codeLink: "https://github.com/poovesh07/User-Form",
      },
      {
        title: "Weather App",
        image: weather,
        tags: ["React", "API"],
        description: [
          "Built a live weather forecast app using React and OpenWeather API. Displays temperature, humidity, and wind speed with input validation and error handling.",
        ],
        liveLink: "https://weather-app-delta-ten-42.vercel.app/",
        codeLink: "https://github.com/poovesh07/Weather-app",
      },
      {
        title: "To-Do List App",
        image: todolist,
        tags: ["React"],
        description: [
          "Developed a task management app with React. Users can add, edit, delete, and filter tasks. Implemented local storage for persistence and smooth UI transitions.",
        ],
        liveLink: "https://todo-app-puce-gamma-53.vercel.app/",
        codeLink: "https://github.com/poovesh07/todo-app",
      },
      {
        title: "Redux App",
        image: redux,
        tags: ["React", "Redux Toolkit"],
        description: [
          "Built a state-managed app using React and Redux Toolkit. Leveraged useSelector and useDispatch hooks for global state and optimized re-render performance.",
        ],
        liveLink: "https://redux-puce-seven.vercel.app/",
        codeLink: "https://github.com/poovesh07/redux",
      },
      {
        title: "Expense Tracker",
         image: expence,
        tags: ["React", "Tailwind CSS"],
        description: [
          "Simple expense tracker built with React and Tailwind CSS.Supports add, edit, and delete with data saved in LocalStorage",
          
        ],
        liveLink: "https://expense-tracker-three-phi-59.vercel.app/",
        codeLink: "https://github.com/poovesh07/Expense-Tracker",
      },

    ],
  };

  const Section = ({ title, icon, items }) => (
    <div className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        {icon}
        <h3 className="font-sora font-semibold md:text-[36px] text-[24px] text-white">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((proj, idx) => (
          <div
            key={idx}
            className="relative group bg-[#1a1a2e] shadow-inset-white-glow p-8 rounded-[50px] border-2 border-[#8750F7] overflow-hidden"
          >
            <div className="relative">
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-xl w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition-all duration-300">
                <a
                  href={proj.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition"
                >
                  <FiExternalLink size={24} />
                </a>
                {proj.codeLink && (
                  <a
                    href={proj.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition"
                  >
                    <FiEye size={24} />
                  </a>
                )}
              </div>
            </div>
            <h4 className="font-sora font-semibold text-[22px] text-[#FFFFFF] mt-4">
              {proj.title}
            </h4>
            <div className="font-sora text-[12px] text-[#DDDDDD] mt-1 space-y-1">
              {proj.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {proj.tags.map((tag, i) => (
                <span
                  key={i}
                  className="font-sora text-[16px] text-[#ffffff] bg-[#8750F7] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="project" className="px-6 md:pb-12 pb-4 bg-[#0e0e16]">
      <div className="max-w-7xl m-auto ">
        <h2 className="font-sora text-[32px] md:text-[46px] font-medium gradient-text mb-10 text-center">
          Recent Projects
        </h2>

        <Section
          title="React"
          icon={<SiReact className="text-cyan-400" size={30} />}
          items={projects.react}
        />
      </div>
    </section>
  );
};

export default RecentProjects;
