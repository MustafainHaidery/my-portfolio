import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id="about">
        <div id="left">
            <h1>About Me.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum laboriosam nesciunt ipsa quod sed consequuntur id quo atque qui nobis possimus animi modi deleniti asperiores nam, dolores sunt nisi eum minima architecto eius fugit? Accusantium ea aperiam reprehenderit, cumque officia iusto rerum sed libero qui vel id! Minima, dolorem dignissimos.</p>
        </div>
        <div>
          <Image src={"/mustafain.jpg"} width={300} height={300} alt="my face" className="img" />
        </div>
    </section>
  )
}

export default About
