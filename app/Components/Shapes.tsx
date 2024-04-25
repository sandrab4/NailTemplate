import React from "react";
import { ShapesData } from "../Data/Shapes";

const Shapes = () => {
    return (
        <div id="Shapes">
            <div id="ShapesCardsContainer">
                {ShapesData.map((data) => (
                    <div id="ShapesCard" key={data.id}>
                        <div id="ShapesCardImageContainer">
                            {data.image && (
                                <img id="ShapesCardImage" src={data.image} />
                            )}
                        </div>
                        <div id="ShapesCardShopAllContainer">{data.title}</div>
                    </div>
                ))}
            </div>

            <style>
                {`
                #Shapes {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100%;  
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                
                #ShapesCardsContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 85%;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: space-around;
                    overflow: hidden;
                }

                #ShapesCard {
                    display: flex;
                    position: relative;
                    width: 250px;
                    height: 320px;
                    margin: 10px;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2), 0 3px 3px 2px rgba(0, 0, 0, 0.10);
                    border-radius: 10px;
                }

                #ShapesCardImageContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 60%;
                    justify-content: center;
                    align-items: center;
                }

                #ShapesCardImage {
                    height: 100%;
                }

                #ShapesCardShopAllContainer {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    box-shadow: 0 1px 0 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    border-radius: 10px;
                }
                `}
            </style>
        </div>
    );
};

export default Shapes;