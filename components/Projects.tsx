import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://calm-blue-macaw-suit.cyclic.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src=""
                height={150}
                width={150}
                alt=" Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">E-commerce</p>
                <p className="text-gray-500 text-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem saepe ipsum doloremque non dolorem eius rem impedit distinctio fugiat?
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://calm-blue-macaw-suit.cyclic.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src=""
                height={150}
                width={150}
                alt=""
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Lorem, ipsum dolor.
                </p>
                <p className="text-gray-500 text-[10px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, earum.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://calm-blue-macaw-suit.cyclic.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src=""
                height={150}
                width={150}
                alt=""
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Lorem, ipsum.
                </p>
                <p className="text-gray-500 text-[10px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nobis.                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://calm-blue-macaw-suit.cyclic.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src=""
                height={150}
                width={150}
                alt=""
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">
                  Lorem, ipsum.
                </p>
                <p className="text-gray-500 text-[10px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, eveniet!                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
