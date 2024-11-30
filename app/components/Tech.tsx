import React from 'react'
import { BiData } from 'react-icons/bi';
import { BsWordpress } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { DiJavascript, DiMongodb, DiPython } from "react-icons/di";
import { FaNodeJs, FaPhp } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandReactNative, TbSql } from "react-icons/tb";

const Tech = () => {
  return (
    <section id="tech">
    <h2 className="col-span-1">Tech Stack</h2>
    <div className="icons col-span-4">
      <RiNextjsFill color="white" className="icon" size={50} />
      <SiExpress color="white" size={50} />
      <FaNodeJs color="white" size={50} />
      <DiJavascript color="white" size={50} />
      <DiPython color="white" size={50} />
      <FaPhp color="white" size={50} />
      <BsWordpress color="white" size={50} />
      <DiMongodb color="white" size={50} />
      <TbSql color="white" size={50} />
      <BiData color="white" size={50} />
      <CgWebsite color="white" size={50} />
      <TbBrandReactNative color="white" size={50} />
      <GrReactjs color="white" size={50} />
    </div>
  </section>
  )
}

export default Tech
