import React, { FunctionComponent } from "react";
import { FilterItemWrapper } from "./FilterItem.sc";

interface Item {
    title: string;
    taps: { item: string };
    color: string;
}

const FilterItem: FunctionComponent<Item> = ({ title, taps, color }) => {
    console.log("Hello World");
    return (
        <FilterItemWrapper>
            <p>Item</p>
            {title}
            {taps}
            {color}
        </FilterItemWrapper>
    );
};

export default FilterItem;
