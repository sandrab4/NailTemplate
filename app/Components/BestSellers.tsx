import React from "react";
import { BestSellersData } from "../Data/BestSellersData";

const BestSellers = () => {
    return (
        <div id="BestSellers">
            <div id="BestSellersHeaderContainer">
                <h1 id="BestSellersHeader">Best Sellers</h1>
            </div>
            <div id="BestSellersCardsContainer">
                {BestSellersData.map((data) => (
                    <div id="BestSellersCard" key={data.id}>
                        <div id="BestSellersCardImageContainer">
                            {data.image && (
                                <img id="BestSellersCardImage" src={data.image} />
                            )}
                        </div>
                        <div id="BestSellersCardCartContainer">Add to cart</div>
                        <div id="BestSellersCardTextContainer">
                            <div id="BestSellersCardNameContainer">
                                <p id="BestSellersCardName">{data.name}</p>
                            </div>
                            <div id="BestSellersCardShapeContainer">
                                <p id="BestSellersCardShape">{data.shape}</p>
                            </div>
                            <div id="BestSellersCardPriceContainer">
                                <p id="BestSellersCardPrice">${data.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div id="BestSellersShopAllButtonContainer">
                <button id="BestSellersShopAllButton">Shop all nails</button>
            </div>

            <style>
                {`
                #BestSellers {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100%;  
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #BestSellersHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    padding: 20px 0;
                    justify-content: center;
                    align-items: center;
                }

                #BestSellersHeader {

                }

                #BestSellersCardsContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 85%;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: space-around;
                    overflow: hidden;
                }

                #BestSellersCard { 
                    display: flex;
                    position: relative;
                    width: 250px;
                    height: 320px;
                    margin: 10px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2), 0 3px 3px 2px rgba(0, 0, 0, 0.10);
                    border-radius: 10px;
                }

                #BestSellersCardImageContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 60%;
                    justify-content: center;
                    align-items: center;
                }

                #BestSellersCardImage {
                    height: 100%;
                }

                #BestSellersCardCartContainer {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 10%;
                    margin: 10px 0;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    box-shadow: 0 1px 0 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    border-radius: 10px;
                }

                #BestSellersCardTextContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 35%;
                    padding-left: 10px;
                    flex-direction: column;
                    justify-content: space-around;
                }

                #BestSellersCardName {
                    font-weight: bold;
                }

                #BestSellersCardShape {
                    font-size: 14px;
                }

                #BestSellersCardPrice {
                    font-style: italic;
                }

                #BestSellersShopAllButtonContainer {
                    padding: 20px 0;
                }
                
                #BestSellersShopAllButton {
                    font-size: 15px;
                    color: #EBF0F3;
                    background: black;     
                    padding: 5px 25px 5px;
                    border-radius: 10px;
                    cursor: pointer;
                }
                
                #BestSellersShopAllButton:hover {
                    background: #28282B;
                }
                `}
            </style>
        </div>
    );
};

export default BestSellers;