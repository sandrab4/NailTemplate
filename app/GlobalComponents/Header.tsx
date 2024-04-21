import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
    return (
        <div id="Header">
            <div id="HeaderLogoContainer">
                <img id="HeaderLogo" src="" />
            </div>
            <div id="HeaderTextContainer">
                <ul id="HeaderListContainer">
                    <div id="HeaderListItems">
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop All</a></li>
                        <li><a href="/customize">Customize Your Own</a></li>
                    </div>
                    <div id="HeaderListIcons">
                        <IoSearch />
                        <MdOutlineShoppingBag />
                    </div>
                </ul>
            </div>

            <style>
                {`
                #Header {
                    display: flex;
                    position: fixed;
                    top: 0;
                    width: 100vw;
                    height: 12vh;
                    background: #EBF0F3;
                }
                #HeaderLogoContainer {
                    display: flex;
                    position: fixed;
                    left: 40%;
                    width: 20%;
                    height: 5%;
                    justify-content: center;
                    align-item: center;
                    border: 1px solid red;
                }
                #HeaderLogo {
                    width: 50px;
                }
                #HeaderTextContainer {
                    display: flex;
                    position: relative;
                    top: 50%;
                    width: 100%;
                    height: 50%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                #HeaderListContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    list-style-type: none;
                }
                #HeaderListItems {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    color: black;
                    text-decoration: none;
                }
                #HeaderListIcons {
                    display: flex;
                    position: relative;
                    bottom: 50%;
                    width: 20%;
                    height: 50%;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    font-size: 20px;
                }
                `}
            </style>
        </div>
    );
};

export default Header;