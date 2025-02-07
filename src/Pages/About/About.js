import React from "react";
import profilePic from "../../Assets/profileImage.png";
import { Link } from "react-scroll";

function About() {
  return (
    <div className=" px-4 font-serif py-36 mt-40">
      <div className=" flex flex-col-reverse justify-evenly items-center md:flex-row-reverse">
        <div className=" w-full md:w-1/2 h-full px-2  md:px-20 text-xl ">
        <h1 className=" text-3xl md:text-5xl py-4 my-2 md:my-10 border-b-2 w-max border-black"> About Me</h1>
          <p className=" text-md md:text-xl md:leading-8">
              I’m a junior front-end developer looking for a new role in an exciting
              company. I focus on writing accessible HTML, using modern CSS
              practices and writing clean JavaScript. When writing JavaScript code,
              I mostly use React, but I can adapt to whatever tools are required.
              I’m based in Kerala, India but I’m happy working onsite and remotely and I have
              experience in remote teams. When I’m not coding, you’ll find me
              outdoors. I love being out in nature whether that’s going for a walk,
              run or cycling. I’d love you to check out my work.
              <br/>
              {/* <Link to={'projectSection'} className=" button w-max p-2 font-sans hover:text-white transition-all duration-200 border-2 border-black">
               Explore my works
              </Link> */}
              
          </p>
        </div>
        <div className=" bg-green-500  md:w-3/12   object-cover">
          <img
            src={profilePic}
            alt="profilePic"
            className=" object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
