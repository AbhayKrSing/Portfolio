import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { textvariants } from "../variants";
import emailjs from "@emailjs/browser";
import Hoc from "../HOC/Hoc";
//service_wqwkl2a  -->Service ID
const Contact = ({ isMobile }) => {
  const Introref = useRef();
  const IntroView = useInView(Introref);
  const [loading, setloading] = useState(false);
  const [formdata, setformdata] = useState({
    senderName: "",
    senderEmail: "",
    senderMessage: "",
  });
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const submitform = async (e) => {
    try {
      e.preventDefault();
      setloading(true);
      const res = await emailjs.send(
        "service_wqwkl2a",
        "template_l9l2hdi",
        {
          from_name: formdata.senderName,
          to_name: "Abhay Kr",
          message: formdata.senderMessage,
          reply_to: formdata.senderEmail,
        },
        "egOnwXhKRBHBeER-5"
      );
      setloading(false);
      setformdata({
        senderName: "",
        senderEmail: "",
        senderMessage: "",
      });
      console.log("SUCCESS!", res.status, res.text);
      alert("Email send successfully,I will get back to you soon.");
    } catch (error) {
      console.log(error);
      setloading(false);
      alert("Something went wrong can 't send email.Try again later");
    }
  };
  return (
    <>
      <motion.div
        ref={Introref}
        variants={textvariants}
        animate={IntroView ? "visible" : "hidden"}
        className={`flex justify-center xl:py-20 xl:mt-20 rounded-lg ${
          isMobile ? "" : "xl:w-[43rem] w-[100%]"
        }`} //40rem hatana hai phone pe
      >
        <div
          className="w-[100%] p-20 rounded-lg"
          style={{
            background: "#00223a ",
          }}
        >
          <h2 className="text-xl font-semibold">
            <span className="text-secondary font-light tracking-widest">
              GET IN TOUCH
            </span>
          </h2>
          <h1 className="text-6xl font-black my-6">
            <span className="text-secondary">Contacts.</span>
          </h1>
          <div className="flex space-x-10 flex-wrap">
            <div></div>
          </div>
          <form className="mt-3" onSubmit={submitform}>
            <div className="my-10">
              <div className="font-bold">Your Name</div>
              <input
                type="text"
                className="w-[100%] px-3 py-2 bg-transparent border-solid border-2 border-blue-950"
                placeholder="Write Your Name"
                name="senderName"
                value={formdata.senderName}
                onChange={handlechange}
              />
            </div>

            <div className="my-10">
              <div className="font-bold">Your Email</div>
              <input
                type="text"
                className="w-[100%] px-3 py-2 bg-transparent border-solid border-2 border-blue-950"
                placeholder="Whats Your Email"
                name="senderEmail"
                value={formdata.senderEmail}
                onChange={handlechange}
              />
            </div>

            <div className="my-10">
              <div className="font-bold">Your Message</div>
              <textarea
                type="text"
                className="w-[100%] h-48 he px-3 py-2 bg-transparent border-solid border-2 border-blue-950"
                placeholder="Whats Your message"
                name="senderMessage"
                value={formdata.senderMessage}
                onChange={handlechange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-950 py-3 px-10 rounded-lg font-bold"
            >
              {loading ? "loading" : "Send"}
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Hoc(Contact, "contact");
