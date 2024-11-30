import Link from 'next/link';
import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { PiDevToLogo } from 'react-icons/pi';

const Hero = () => {
    return (
        <section id="hero">
            <h1>I am <span className="spacial_text">Mustafain Haidery!</span></h1>
            <p>I am a Web Developer</p>
            <button className="primary_btn">Hire Me</button>
            <div id="social_icons">
                <Link href={"https://github.com/MustafainHaidery"}><BsGithub className="icon" /></Link>
                <Link href={"https://www.linkedin.com/in/muhammad-mustafain-haidery-85276132a/"}><BsLinkedin className="icon" /></Link>
                <Link href={"https://www.facebook.com/Haidery7861109214/"}><BsFacebook className="icon" /></Link>
            </div>
        </section>
    )
}

export default Hero
