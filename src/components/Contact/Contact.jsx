import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const form = useRef();
  const { theme } = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: theme === 'light' ? 'light' : 'dark',
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again. ❌", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: theme === 'light' ? 'light' : 'dark',
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] transition-colors duration-300"
    >
      {/* Toast Container */}
      <ToastContainer theme={theme === 'light' ? 'light' : 'dark'} />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold transition-colors duration-300">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-white dark:bg-[#0d081f] p-6 rounded-lg shadow-xl dark:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center transition-colors duration-300">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          {/* NAME */}
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300 placeholder-gray-500 dark:placeholder-gray-400"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300 placeholder-gray-500 dark:placeholder-gray-400"
          />

          {/* SUBJECT */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300 placeholder-gray-500 dark:placeholder-gray-400"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300 placeholder-gray-500 dark:placeholder-gray-400"
          />

          {/* hidden */}
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <input
            type="hidden"
            name="user_agent"
            value={navigator.userAgent}
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
