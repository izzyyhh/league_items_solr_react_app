import React, { FunctionComponent } from "react";
import { FilterItemWrapper, Title } from "./FilterItem.sc";
import Tag from "./Tag/Tag";

interface Item {
    title: string;
    taps: Array<string>;
    color?: string;
    background: string;
}

const FilterItem: FunctionComponent<Item> = ({ title, taps, color, background }) => {
    return (
        <FilterItemWrapper background={background} color={color} >
            <Title>{title}</Title>
            {taps.map((item) => <Tag tag={item} />)}
        </FilterItemWrapper>
    );
};

export default FilterItem;
