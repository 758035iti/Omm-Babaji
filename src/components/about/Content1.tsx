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
          subtitle="The Bhagavad Gita offers timeless wisdom for leading a righteous and fulfilling life. It teaches us about duty (Dharma), selfless action (Karma Yoga), and the importance of devotion (Bhakti). Through its verses, we learn how to navigate life's challenges with wisdom, courage, and inner peace. "
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
          subtitle="Hinduism, one of the world's oldest religions, is rich with traditions, scriptures, and philosophies. Devotees often seek answers to profound questions—What is Dharma? What is the significance of different gods and rituals? This section explores these common inquiries and provides insights based on ancient scriptures."
        >
          <Event title="" description={[]} />
        </Events>

        {/* 2024 Entry */}
        <Events
          startDate="2024/06/01"
          title={
            <p className="text-3xl font-bold">
              Timeless Wisdom from the Bhagavad Gita
            </p>
          }
          subtitle="The Bhagavad Gita serves as a guiding light, offering deep insights into self-realization, perseverance, and inner peace. Lord Krishna’s teachings inspire us to embrace challenges with a calm mind, focus on our actions without worrying about outcomes, and cultivate a life rooted in wisdom and purpose. Even today, these lessons empower us to lead a fulfilling and spiritually enriched life."
        >
          <Event title="" description={[]} />
        </Events>
      </Timeline>
    </div>
  );
};

export default Content1;
