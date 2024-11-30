import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div id='logo'><Link href={"/"}>Mustafain.</Link></div>
        
        <div id='buttons'>
          <button><Link href={"/about"}>About Me</Link></button>
          <button><Link href={"/contact"}>Hire Me</Link></button>
        </div>
    </div>
  )
}

export default Navbar
