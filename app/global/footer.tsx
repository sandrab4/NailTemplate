import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="Footer">
            <div id="FooterContainer">
                <div id="FooterQuickLinksContainer">
                    <p id="FooterQuickLinksHeader">Quick Links</p>
                    <a href="/faq">FAQ</a>
                    <a href="/how-to/apply">How to apply nails</a>
                    <a href="/how-to/remove">How to remove nails</a>
                </div>
                <div id="FooterContactContainer">
                    <p id="FooterContactHeader">Contact Us!</p>
                    <a href="/">Email <MdOutlineMail /></a>
                    <a href="/">Pinterest <FaPinterest /></a>
                </div>
            </div>
            <div id="FooterLogoContainer">
                <img src="" />
            </div>

            <style>
                {`
                #Footer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 200px;
                    flex-direction: column;
                    background-color: #EBF0F3;
                }

                #FooterContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 60%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: space-between;
                }

                #FooterQuickLinksContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    justify-content: space-around;
                    flex-direction: column;
                    padding: 10px 100px;
                }

                #FooterQuickLinksHeader {
                    font-weight: bold;
                }
                #FooterContactContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    justify-content: space-around;
                    flex-direction: column;
                    align-items: flex-end;
                    padding: 10px 100px;
                }

                #FooterContactHeader {
                    font-weight: bold;
                }

                #FooterLogoContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 40%;
                    border: 1px solid red;
                }

                @media (max-width: 700px) {
                    #FooterContactContainer, #FooterQuickLinksContainer {
                        padding: 10px 10px;
                    }
                }
                `}
            </style>
        </div>
    );
};

export default Footer;