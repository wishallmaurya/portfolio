import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          I have [9 months of experience] as a Developer  where I worked on [6 projects].
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam aut sit. Ea blanditiis dolor deserunt sed nulla, id laudantium magni rerum, repellat quos cumque et, doloribus fuga aperiam repudiandae. Laborum id enim non. Soluta veritatis minima numquam molestias id!
          <br />
          <br />
          With a fervor for crafting elegant solutions, I navigate the
          ever-evolving landscape of software development. My journey involves
          translating concepts into code, creating seamless user experiences,
          and constantly pushing the boundaries of what&#39;s possible
        </p>
      </div>
    </section>
  );
};

export default About;
