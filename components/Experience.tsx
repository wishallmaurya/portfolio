import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold"></span> Software Developer
          </p>
          <p className="text-gray-300">MAY 2023 - PRESENT, HYDERABAD</p>
        </div>
        <p className="text-gray-300 pt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit adipisci neque laboriosam quaerat voluptates, saepe, dolorem pariatur, provident harum omnis quia dicta natus eum officia? Ratione quae sit laudantium ducimus earum fuga reiciendis laborum. Repellat ipsum voluptatum molestias commodi sit, dolorum cum libero magnam repellendus sequi tempora blanditiis ut, natus veniam quas, beatae maiores ab exercitationem! Adipisci nesciunt, ipsa, corporis porro quisquam distinctio labore maiores quaerat officiis, ullam voluptas aut!.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae itaque quo pariatur non aspernatur porro obcaecati iste ea vitae quibusdam alias aperiam sapiente quas debitis, cum corporis, et quidem ab, enim velit minima! Veniam omnis cupiditate neque labore. Maiores molestias tenetur esse dignissimos id fugiat ea veritatis. Aliquam, sapiente nisi?
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React Native
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            MongoDb
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Express
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
