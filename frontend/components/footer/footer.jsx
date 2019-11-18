import React from "react";

const Footer = () => {



    return (
        <div className="footer-container">
            <div className="footer-main">
                <div className="footer-info">
                    <div className="footer-about">
                        <h2>Dripcamp is everywhere you want to camp.</h2>
                        <p>
                            Welcome to Dripcamp! Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more.
                        </p>
                    </div>
                    <div className="footer-links">
                        <h2>About</h2>
                        <a href="http://linkedin.com/in/ernestman/" id="linkedin" target="_blank">
                            <i className="fab fa-linkedin fa-s"></i>&nbsp;LinkedIn
                        </a>
                        <a href="http://github.com/ernestman/" id="github-ftr" target="_blank">
                            <i className="fab fa-github"></i>&nbsp;Github
                        </a>
                        <a href="http://angel.co/ernestman/" id="angellist-ftr" target="_blank">
                            <i className="fab fa-angellist"></i>&nbsp;Angellist
                        </a>
                        

                    </div>
                    <div className="footer-links">
                        <h2>Social</h2>
                        <a href="https://ernieman.com" id="personalsite" target="_blank">
                            <i className="far fa-user"></i>&nbsp;Personal Site
                        </a>
                        
                        <a href="https://open.spotify.com/user/ernestman?si=KXLgRmtoTH-fwD44bLknBQ" id="spotify" target="_blank">
                            <i className="fab fa-spotify"></i>&nbsp;Spotify
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>Made in California. A Hipcamp clone. By Ernie Man.</p>
                </div>
            </div>
        </div>
    )

}

export default Footer;