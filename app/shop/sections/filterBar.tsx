import React from "react";
// import data allNails
// import filter data
// import nail type

const FilterBar = () => {
    return (
        <div id="FilterBar">
            <div id="FilterBarHeaderContainer">
                <h1 id="FilterBarHeader">All Nails</h1>
            </div>
            <div id="FilterBarLengthsFilterContainer">
                <select name="lengths" id="LengthsFilter">
                    <option>Filter Lengths</option>
                    <option value="square">S</option>
                    <option value="almond">M</option>
                    <option value="coffin">L</option>
                    <option value="stiletto">XL</option>
                    <option value="stiletto">XXL</option>
                </select>
            </div>
            <div id="FilterBarBestSellersFilterContainer">
                <select name="bestsellers" id="BestSellerFilter">
                    <option>Best Selling</option>
                    <option value="pricelow">Price Low to High</option>
                    <option value="pricehigh">Price High to Low</option>
                    <option value="datenew">Date New to Old</option>
                    <option value="dateold">Date Old to New</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;