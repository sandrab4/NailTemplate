import React from "react";
import nailbanner from "../public/nailbanner.webp";

const Hero = () => {
    return (
        <div id="Hero">
            <div id="HeroImageContainer">
                <img id="HeroImage" src="nailbanner.webp" />
            </div>

            <style>
                {`
                #Hero {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 60vh;
                    border: 1px solid blue;
                }
                #HeroImageContainer {
                    display: flex;
                    position: relative;
                    height: 78%;
                }
                #HeroImage {
                    z-index: -1;
                }
                `}
            </style>
        </div>
    );
};

export default Hero; 