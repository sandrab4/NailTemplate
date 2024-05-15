"use client"
import React, { useState } from "react";
import NailDropdown from "./components/nailDropdown";
import Header from "../../global/header";
import Footer from "../../global/footer";

export default function Page() {

    const [currentCard, setCurrentCard] = useState<number>();

    const handleCurrentCard = (id: number) => {
        if (id === currentCard) {
            setCurrentCard(undefined);
        } else {
            setCurrentCard(id);
        };
    };

    return (
        <div>
            <Header/>
            <div id="New">
                <div id="NewHeaderContainer">
                    <h1>Design your own Press-On Nails</h1>
                    <p>$45</p>
                </div>
                <div id="ShapeContainer">

                </div>
                <div id="ColorContainer">

                </div>
                <div id="ImagesContainer">

                </div>
                <div id="CharmsContainer">

                </div>
                <div id="SizeConatiner">

                </div>
                <div id="NewCartContainer">
                    <button>Add to cart</button>
                </div>
                
                <style>
                    {`
                    #New {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 100%;  
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin-top: 15vh;
                        margin-bottom: 15vh;
                    }
                    #NewHeaderContainer {

                    }
                    #ShapeContainer {

                    }
                    #ColorContainer {

                    }

                    #ImagesContainer {

                    }

                    #CharmsContainer {

                    }

                    #SizeConatiner {

                    }

                    #NewCartContainer {

                    }
                    `}
                </style>

            </div>
            <Footer/>
        </div>
    );
};