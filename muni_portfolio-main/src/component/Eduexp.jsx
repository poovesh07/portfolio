import React from "react";

const TimelineItem = ({ title, role, date, percentage, description, isFirst, isLast }) => (
  <div className="relative pl-8 mb-6 last:mb-0">
    {/* Dot */}
    <div className="absolute left-0 top-1.5 w-3 h-3 bg-[#8750F7] rounded-full border-2 border-[#0B061F] z-10" />

    {/* Line above */}
    {!isFirst && (
      <div className="absolute left-[6px] top-[-2.5rem] h-[2.5rem] w-px bg-[#8750F7] z-0" />
    )}

    {/* Line below */}
    {!isLast && (
      <div className="absolute left-[6px] top-[1.5rem] h-[calc(100%+0.5rem)] w-px bg-[#8750F7] z-0" />
    )}

    {/* Content */}
    <h4 className="font-sora text-white md:text-[20px] text-[18px] leading-[24px] md:leading-[36px]">{title}</h4>
    <p className="font-sora font-light text-[16px] leading-[24px] pt-4 pb-0 text-[#DDDDDD]">{role}</p>
    {percentage && (
      <p className="font-sora font-light text-[16px] leading-[24px] pt-4 pb-4 text-[#DDDDDD]">{percentage}</p>
    )}
    {description && (
      <p className="font-sora font-light text-[16px] leading-[24px] pt-2 pb-2 text-[#AAAAAA]">
        {description}
      </p>
    )}
    <p className="font-sora font-light text-[16px] leading-[24px] text-[#747779]">{date}</p>
  </div>
);

const TimelineColumn = ({ heading, data }) => (
  <div className="w-full md:w-1/2 md:px-4 px-0 pb-6 md:pb-0">
    <h3 className="font-sora md:pb-16 pb-2 text-[20px] leading-[24px] text-[#8750F7] font-normal mb-6">{heading}</h3>
    <div className="ml-1 relative">
      {data.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isFirst={index === 0}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  </div>
);

export default function TimelineSection() {
  const education = [
    {
      title: "BACHELOR OF COMPUTER APPLICATIONS",
      role: "Kamaraj College, Tuticorin",
      percentage: "7.7 CGPA",
      date: "2022 - 2025",
    },
    {
      title: "HIGHER SECONDARY CERTIFICATE",
      role: "St. Lasalle Higher Secondary School, Tuticorin",
      percentage: "70%",
      date: "2020 - 2022",
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#0B061F] text-white py-16 px-6 md:px-16 flex justify-center"
    >
      <div className="max-w-4xl w-full">
        <h2 className="font-sora text-center text-[36px] md:text-[46px] font-semibold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="relative border-l-2 border-purple-500 pl-6 space-y-10">
          {education.map((item, index) => (
            <div key={index} className="relative">
              {/* timeline dot */}
              <div className="absolute -left-[10px] top-2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" />

              {/* card */}
              <div className="bg-[#120B2C] p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                <h3 className="text-[20px] md:text-[22px] font-semibold text-purple-400">
                  {item.title}
                </h3>
                <p className="text-gray-300 mt-1">{item.role}</p>
                <p className="text-purple-300 font-medium mt-1">{item.percentage}</p>
                <p className="text-gray-400 text-sm mt-2">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

