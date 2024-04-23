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
                    height: 100%;
                    margin-top: 12vh;
                }

                #HeroImageContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    align-items: flex-start;
                }
                
                #HeroImage {
                    width: 100%;
                    z-index: 4;
                }
                `}
            </style>
        </div>
    );
};

export default Hero; 