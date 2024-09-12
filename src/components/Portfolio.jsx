import "../App.css";
import Projects from "./Projects";

import BackImg from "../assets/images.jpg";

export default function Portfolio() {
    return (
        <>
            <h2>Portfolio</h2>
            <div className="projects">
                <Projects
                    title="Project 1"
                    backgroundImg={BackImg}
                    link="https://github.com"
                />
                <Projects
                    title="Project 2"
                    backgroundImg={BackImg}
                    link="https://github.com"
                />
                <Projects
                    title="Project 3"
                    backgroundImg={BackImg}
                    link="https://github.com"
                />
                <Projects
                    title="Project 4"
                    backgroundImg={BackImg}
                    link="https://github.com"
                />
                <Projects
                    title="Project 5"
                    backgroundImg={BackImg}
                    link="https://github.com"
                />
                <Projects
                    title="Project 6"
                    backgroundImg={BackImg}
                    link="https://github.com"
                />
            </div>
        </>
    );
}
