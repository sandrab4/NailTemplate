import React from "react";
import { BestSellersData } from "../Data/BestSellersData";

const BestSellers = () => {
    return (
        <div id="BestSellers">
            <div id="BestHeaderContainer">
                <h1 id="BestHeader">Best Sellers</h1>
            </div>
            <div id="BestSellersCardsContainer">
                {BestSellersData.map((data) => (
                    <div id="BestSellersCards" key={data.id}>
                        <div id="BestSellersCardsImagesContainer">
                            {data.image && (
                                <img id="BestSellersCardsImages" src={data.image} />
                            )}
                        </div>
                        <div id="BestSellersCardsCartContainer">
                            <button id="BestSellersCardsCartButton">Add to cart</button>
                        </div>
                        <div id="BestSellersCardsTextContainer">
                            <div id="BestSellersCardsNameContainer">
                                <p id="BestSellersCardsName">{data.name}</p>
                            </div>
                            <div id="BestSellersCardsShapeContainer">
                                <p id="BestSellersCardsShape">{data.shape}</p>
                            </div>
                            <div id="BestSellersCardsPriceContainer">
                                <p id="BestSellersCardsPrice">${data.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div id="BestSellersShopAllButtonContainer">
                    <button id="BestSellersShopAllButton">Shop all nails</button>
                </div>
            </div>

            <style>
                {`
                #BestSellers {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100vh;
                }
                #BestHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                }
                #BestHeader {
                    display: flex;
                    position: relative:
                }
                #BestSellersCardsContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    flex-direction: row;
                    border: 1px solid blue;
                }
                #BestSellersCards {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 50%;
                    border: 1px solid red;
                }
                #BestSellersImagesCardsContainer {

                }
                #BestSellersCardsImages {
                    width: 20px;
                    height: 20px;
                }
                #BestSellersCardsCartContainer {

                }
                #BestSellersCardsCartButton {

                }
                #BestSellersCardsTextContainer {

                }
                #BestSellersCardsNameContainer {

                }
                #BestSellersCardsName {

                }
                #BestSellersCardsShapeContainer {

                }
                #BestSellersCardsShape {

                }
                #BestSellersCardsPriceContainer {

                }
                #BestSellersCardsPrice {

                }
                #BestSellersShopAllButtonContainer {

                }
                #BestSellersShopAllButton {
                    
                }
                `}
            </style>
        </div>
    );
};

export default BestSellers;