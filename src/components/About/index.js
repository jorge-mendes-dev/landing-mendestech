import React from "react";

import { random } from "utils/random";
import { Divider } from "components";

import info from "info";

const About = () => {
  const { about } = info;
  const { title, sections } = about;

  return (
    <section className={`bg-background py-8`} id="about">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h2
          className={`w-full my-2 text-5xl font-bold leading-tight text-center`}
        >
          {title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h2>

        <Divider />
        <div className={`flex flex-wrap p-8`}>
          {sections.map(({ title, description }) => (
            <div key={random()}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-6 text-primary`}
              >
                {title}
              </h3>
              <p
                className={`mb-6 text-gray-600 subpixel-antialiased font-light tracking-light leading-9 align-baseline leading-relaxed`}
              >
                {description}
              </p>
            </div>
          ))}

          {/* <div className={`container text-center max-w-5xl mx-auto m-8`}>
            <p
              className={`text-3xl text-gray-800 font-bold leading-none sm:text-4xl`}
            >
              {skillTitle.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={index % 2 ? "text-primary" : "text-border"}
                >
                  {word}{" "}
                </span>
              ))}
            </p>

            <div className={`flex flex-wrap flex-col sm:flex-row`}>
              <div className={`w-full sm:w-1/2 p-6`}>
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                  <div className="h-6/6">
                    <Skills data={hardSkills} />
                  </div>
                </div>
              </div>
              <div className={`w-full sm:w-1/2 p-6`}>
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                  <div className="h-6/6">
                    <Skills data={softSkills} />
                  </div>
                </div>
              </div>
            </div>

          </div> */}

        </div>
      </div>
    </section>
  );
};

export default About;
