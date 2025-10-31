import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { pooveshContact } from "../assets/images"; // ✅ Correct import

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate submit delay
      setSubmitStatus("success");
      setFormData({ firstName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0B061F] md:py-16 py-10 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Column — Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="font-sora text-[32px] md:text-[46px] font-medium gradient-text mb-6 leading-tight">
            <span>Let's work</span>
            <br />
            <span>together!</span>
          </h2>

          <p className="font-sora font-light text-[16px] text-[#DDDDDD] mb-6 leading-relaxed">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>

          <form
            action="https://getform.io/f/bzywmmwa"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full p-2 bg-transparent border-b border-[#636363] text-[#757575] font-sora text-[18px] focus:outline-none focus:border-[#8750F7]"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full p-2 bg-transparent border-b border-[#636363] text-[#757575] font-sora text-[18px] focus:outline-none focus:border-[#8750F7]"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full p-2 bg-transparent border-b border-[#636363] text-[#757575] font-sora text-[18px] focus:outline-none focus:border-[#8750F7]"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="w-full p-2 bg-transparent border-b border-[#636363] text-[#757575] font-sora text-[18px] focus:outline-none focus:border-[#8750F7]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#8750F7] hover:bg-[#7040E0] text-white font-semibold py-4 px-6 mt-8 rounded-full flex items-center gap-2 transition-all shadow-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              )}
            </button>

            {submitStatus === "success" && (
              <p className="mt-4 text-green-400">
                ✅ Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-red-400">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Right Column — Contact Info */}
        <div className="w-full md:w-1/2 md:pl-8 flex flex-col items-start">
          <img
            src={pooveshContact}
            alt="Contact"
            className="rounded-2xl object-cover h-[320px] w-full shadow-lg"
          />

          <p className="font-sora font-light text-[16px] text-[#DDDDDD] my-4 leading-relaxed">
            I’m actively seeking full-time opportunities as a front-end
            developer. If you have an opening or want to discuss how I can
            contribute to your team, feel free to reach out anytime.
          </p>

          <div className="text-white space-y-2 mt-2">
            <a
              href="tel:+918015780957"
              className="block text-[18px] text-[#FFFFFF] font-light hover:text-[#8750F7]"
            >
               +91 8015780957
            </a>

            <a
              href="mailto:poovesh057@gmail.com"
              className="block text-[18px] text-[#FFFFFF] font-light hover:text-[#8750F7]"
            >
               poovesh057@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 flex-wrap">
            {[
              { icon: <FaGithub />, link: "https://github.com/poovesh07" },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/poovesh-v-249272281/",
              },
              { icon: <FaWhatsapp />, link: "https://wa.me/918015780957" },
              { icon: <FaEnvelope />, link: "mailto:poovesh057@gmail.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#8750F7] text-xl text-[#a47bff] hover:bg-[#8750F7] hover:text-white transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
