import React from "react";
// import ReactTypingEffect from "react-typing-effect";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Akshita-Parmar-modified.png";

const About = () => {
  return (
    <section
      id="about"
      className="pt-4 pb-8 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-18"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* ---------left Side---------- */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* ---Greeting---*/}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi,I am
          </h1>

          {/* -----Name---- */}
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Akshita Parmar
          </h2>

          {/* ------Skills Heading with Typing Effect------ */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Front-End Developer",
                "App Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          {/* ---------About Me Paragraph--------------- */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a passionate Front-End Web Developer and aspiring UI/UX
            Designer, dedicated to building modern, responsive, and
            user-friendly web applications. Skilled in HTML, CSS, JavaScript,
            React, and Tailwind CSS, I create elegant, interactive interfaces
            that provide seamless user experiences. I love learning new
            technologies and turning creative ideas into engaging digital
            solutions.
          </p>

          {/* ---------Resume Button------------ */}
          <a
            href="https://drive.google.com/file/d/1JUK7CqzFq_K7AE0Ms9Vq_94IwCeIgVmy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-4 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* -------------Right Side---------- */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Akshita Parmar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
