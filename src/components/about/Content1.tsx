"use client";
import React from "react";
import { Timeline, Events, Event } from "vertical-timeline-component-react";

const Content1 = () => {
  // Custom theme for colors
  const customTheme = {
    borderDotColor: "#ffffff",
    descriptionColor: "#262626",
    dotColor: "#d0cdc4",
    eventColor: "#965500",
    lineColor: "#d0cdc4",
    subtitleColor: "#7c7c7c",
    titleColor: "#405b73",
    yearColor: "#405b73",
  };

  return (
    // Tailwind: max-width of 1000px, center horizontally, add some top/bottom spacing
    <div className="max-w-[45rem] mx-auto my-8">
      <Timeline
        lang="en"
        theme={customTheme}
        dateFormat="only-number"
        collapse
        withoutDay
      >
        {/* 2019 Entry */}
        <Events
          startDate="2019/06/01"
          title={
            <p className="text-3xl font-bold ">
              Some Important Life Lessons From Bhagwat Gita
            </p>
          }
          subtitle="
            Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
            Vishnu, Krishna etc. Proin eget tortor industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type. People ask questions related to Hinduism. "
        >
          <Event title="" description={[]} />
        </Events>

        {/* 2020 Entry */}
        <Events
          startDate="2020/06/01"
          title={
            <p className="text-3xl font-bold ">
              People ask questions related to Hinduism
            </p>
          }
          subtitle="People ask questions related to Hinduism. Temple is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc."
        >
          <Event title="" description={[]} />
        </Events>

        {/* 2024 Entry */}
        <Events
          startDate="2024/06/01"
          title={
            <p className="text-3xl font-bold">
              Some Important Life Lessons From Bhagwat Gita
            </p>
          }
          subtitle="Temple is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc.
Proin eget tortor industry's standard dummy text ever since the 1500s..."
        >
          <Event title="" description={[]} />
        </Events>
      </Timeline>
    </div>
  );
};

export default Content1;
