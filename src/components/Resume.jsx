import "../App.css";

export default function Resume() {
    return (
        <>
            <div className="resume">
                <a href="">Click Here to Download My Resume</a>
            </div>
            <div className="skillsList">
                <h2>Front End Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>

                <h2>Back End Proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
                <h2>Dev Tools</h2>
                <ul>
                    <li>Git</li>
                    <li>npm</li>
                </ul>

            </div>
        </>
    );
}