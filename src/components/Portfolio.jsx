import "../App.css";
import Projects from "./Projects";

// import BackImg from "../assets/images.jpg";
import GameCenter from "../assets/GameCenterScreen.png";
import Readme from "../assets/readme.jpg";
import VehicalBuilder from "../assets/vehicle-builder.png";
import SQL from "../assets/sql.jpg";
import Weather from "../assets/weather.jpg";
import prework from "../assets/bowtie-cat.png";
import Workout from "../assets/workoutwithmentalhealth.png";
import library from "../assets/library.jpg";
import gamemap from "../assets/Game-Map.jpg";
import takeout from "../assets/takeout.jpg";
import testing from "../assets/testing.jpg";
import kanban from "../assets/kanban.jpg";

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
                    title="Workout-with-Mental-Health"
                    backgroundImg={Workout}
                    link="https://github.com/Durfey32/Workout-with-Mental-Health"
                />
                <Projects 
                    title="Book-Search-Engine"
                    backgroundImg={library}
                    link="https://github.com/Durfey32/Book-Search-Engine"
                />
                <Projects
                    title="DND-Game"
                    backgroundImg={gamemap}
                    link="https://github.com/Durfey32/DND-Game"
                />
                <Projects
                    title="Takeout Restaurant Menu and Order System"
                    backgroundImg={takeout}
                    link="https://github.com/Durfey32/Takeout-Restaurant-Menu-and-Order-System"
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
                    title="Kanban-Board"
                    backgroundImg={kanban}
                    link="https://github.com/Durfey32/Kanban-Board"
                />
                 <Projects
                    title="Tech-Quiz-Test-Suite"
                    backgroundImg={testing}
                    link="https://github.com/Durfey32/Tech-Quiz-Test-Suite"
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
