import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { textvariants } from "../variants";
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <img
              src="https://th.bing.com/th/id/OIP.d2_YJpQXd074spMEeB5SdwHaGb?w=205&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              className="rounded-full"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
