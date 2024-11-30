import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({img, heading, content, btnText, link, additional}: {img?:string, heading:string, content:string, btnText?: string, link?:string, additional?:string}) => {
    return (
        <div className="card">
            {img && <Image src={img} width={600} height={800} alt="invoicy2" />}
            <h3>{heading}</h3>
            {additional && <p className="additional">{additional}</p>}
            <p>{content}</p>
            {link ? <Link href={link}><button>{btnText}</button></Link> : btnText && <button>{btnText}</button>}
        </div>
    )
}

export default Card
