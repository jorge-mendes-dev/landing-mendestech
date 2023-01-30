import React from "react";

import { Divider, TalkLink } from "components";

import info from "info";

const Utilities = () => {
  const { utilities } = info;
  const { title } = utilities;

  return (
    <section className={`bg-background py-8`} id="utilities">
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
        <TalkLink />
      </div>
    </section>
  );
};

export default Utilities;
