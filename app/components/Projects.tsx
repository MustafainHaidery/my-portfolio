import React from 'react'
import Card from './Card'

const Projects = () => {
    return (
        <section id='projects' className="cards_section py-5">
            <h2>Projects</h2>
            <div id="cards_area">
                <Card img="/invoicy2.jpg" heading="Invoicy" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio." btnText="Vew Demo" />
                <Card img="/invoicy2.jpg" heading="Invoicy" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio." btnText="Vew Demo" />
                <Card img="/invoicy2.jpg" heading="Invoicy" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio." btnText="Vew Demo" />
            </div>
        </section>
    )
}

export default Projects
