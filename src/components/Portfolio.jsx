import "../App.css";
import Projects from "./Projects";

// import BackImg from "../assets/images.jpg";
import GameCenter from "../assets/GameCenterScreen.png";
import Readme from "../assets/readme.jpg";
import VehicalBuilder from "../assets/vehicle-builder.png";
import SQL from "../assets/sql.jpg";
import Weather from "../assets/weather.jpg";
import prework from "../assets/bowtie-cat.png";

export default function Portfolio() {
    return (
        <>
            <h2 className="portfolio">Portfolio</h2>
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
                    title="Weather-Dashboard"
                    backgroundImg={Weather}
                    link="https://github.com/Durfey32/Weather-Dashboard"
                />
                <Projects
                    title="Prework-study-guide"
                    backgroundImg={prework}
                    link="https://github.com/Durfey32/Prework-study-guide"
                />
            </div>
        </>
    );
}
