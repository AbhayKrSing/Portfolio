import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { textvariants } from "../variants";
import { work_experience } from "../assets";
const WorkExperience = () => {
  const Introref = useRef();
  const IntroView = useInView(Introref);
  return (
    <>
      <motion.div
        ref={Introref}
        variants={textvariants}
        animate={IntroView ? "visible" : "hidden"}
      >
        <h2 className="text-xl font-semibold">
          <span className="text-secondary font-light tracking-widest">
            My Hardwork
          </span>
        </h2>
        <h1 className="text-6xl font-black my-6">
          <span className="text-secondary">Work Experience.</span>
        </h1>
      </motion.div>
      <VerticalTimeline>
        {work_experience.map((element) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#003153", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #003153" }}
              date={element.date}
              iconStyle={{ background: "#006dba", color: "#fff" }}
              icon={<img src={element.image} className="rounded-full h-full" />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.role}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {element.place}
              </h4>
              <p>
                {element.service}
                <p>
                  Link:
                  <a href={element.link} className="font-light" target="_blank">
                    Take me to a {element.name} site
                  </a>
                </p>
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
