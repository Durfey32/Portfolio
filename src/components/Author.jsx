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
                    Spencer Durfey is a full stack developer with a passion for learning and problem solving. He has experience with JavaScript, React, Node.js, Express, and typescript. He is currently attending a coding Bootcamp from the University of Utah in the hopes of getting a full-time position as a software developer.</p>
                <p>
                    He is working on graduating from the University of Utah Coding Bootcamp and has a Bachelor&apos;s degree in Exercise Sports and Science from the University of Utah.</p>
                <p>
                    Spencer enjoys playing video games, playing sports, and spending time with his family. He is a father of a beautiful daughter and is married to his beautiful wife. He is excited to see where his coding journey takes him and is excited to see what the future holds.
                </p>
            </div>
        </div>
    );
}