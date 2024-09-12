import "../App.css";

import headshot from "../assets/headshot.jpg";

export default function Author() {
    return (
        <div className="author-container">
            <img src={headshot} alt="Spencer Durfey" />
            <div className="author-info">
                <h2>Author: Spencer Durfey</h2>
                <p>Full Stack Developer</p>
                <p>
                    Spencer Durfey is a full stack developer with a passion for learning and problem solving. He has experience with JavaScript, React, Node.js, Express, and MongoDB. He is currently seeking a full-time position as a software developer.</p>
                <p>
                    He is a graduate of the University of Utah Coding Bootcamp and has a Bachelor&apos;s degree in Exercise Sports and Science from the University of Utah.</p>
            </div>
        </div>
    );
}