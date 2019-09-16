import React from "react";

const Footer = () => {



    return (
        <div className="footer-container">
            <div className="footer-main">
                <div className="footer-info">
                    <div className="footer-about">
                        <h2>Dripcamp is everywhere you want to camp.</h2>
                        <p>
                            Welcome to Dripcamp! My name is Ernie and I HATE CSS.
                            What I have learned so far is that Michelle is a beast and Elliot
                            is a CSS master. Dolly is also a CSS connoisseur. CSS guru Owen and his pristine, golden man-bun will get you out of any styling jam, guaranteed.
                            Also, Jason can't debug cause he can't spell but is a debugging master and finds my bugs. Carlos personifies
                            ball-is-life. Andrew doesn't care anymore and wears rainbows to the office. I will
                            do the same. Thanks for coming to my TED-Talk.
                        </p>
                    </div>
                    <div className="footer-links">
                        <h2>Social</h2>
                        <a href="http://github.com/ernestman/" id="github" target="_blank">
                            <i className="fab fa-github"></i>&nbsp;Github
                        </a>
                        <a href="http://linkedin.com/in/ernest-man/" id="linkedin" target="_blank">
                            <i className="fab fa-linkedin fa-s"></i>&nbsp;LinkedIn
                        </a>
                        <a href="https://open.spotify.com/user/ernestman?si=KXLgRmtoTH-fwD44bLknBQ" id="spotify" target="_blank">
                            <i className="fab fa-spotify"></i>&nbsp;Spotify
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>Made in California. A Hipcamp clone</p>
                </div>
            </div>
        </div>
    )

}

export default Footer;