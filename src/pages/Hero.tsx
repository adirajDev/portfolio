// import type { FC } from "react";

// interface HeroProps {
//     title: string;
// }

// type HeroProps = {
//     title: string;
// }

const Hero = ({title}: {title: string}) => {
    return (
        <div>
            Hero Section
            <h1>{title}</h1>
        </div>
    )
}

export default Hero;