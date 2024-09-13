import "../App.css";
import Projects from "./Projects";

import BackImg from "../assets/images.jpg";
import GameCenter from "../assets/GameCenterScreen.png";
import Readme from "../assets/readme.jpg";
import VehicalBuilder from "../assets/vehicle-builder.png";
import SQL from "../assets/sql.jpg";

export default function Portfolio() {
    return (
        <>
            <h2>Portfolio</h2>
            <div className="projects">
                <Projects
                    title="GameCenter"
                    backgroundImg={GameCenter}
                    link="https://github.com/Durfey32/GameCenter"
                />
                <Projects
                    title="Good-Readme"
                    backgroundImg={Readme}
                    link="https://github.com/Durfey32/Good-Readme.com"
                />
                <Projects
                    title="Vehicle-Builder"
                    backgroundImg={VehicalBuilder}
                    link="https://github.com/Durfey32/Vehicle-Builder"
                />
                <Projects
                    title="Employee_Tracker"
                    backgroundImg={SQL}
                    link="https://github.com/Durfey32/SQL_Employee_Tracker"
                />
                <Projects
                    title="Placeholder 5"
                    backgroundImg={BackImg}
                    link="https://github.com"
                />
                <Projects
                    title="Placeholder 6"
                    backgroundImg={BackImg}
                    link="https://github.com"
                />
            </div>
        </>
    );
}
