import React, { FunctionComponent } from "react";
import { Filters, FilterWrapper, Label, LabelField } from "./Filter.sc";
import FilterItem from "./FilterItem/FilterItem";

const data = [
    {
        title: "Test",
        taps: { item: "item1"},
        color: "#fffff",
    }
]
const Filter: FunctionComponent = () => {
    data.map((item) => console.log(item));
    return (
        <FilterWrapper>
            <LabelField>
                <Label>Item</Label>
                <Label>Filters</Label>
            </LabelField>
            <Filters>
                {data.map((item) => {
                    <FilterItem title={item.title} taps={item.taps} color={item.color} />
                })}
            </Filters>
        </FilterWrapper>
    );
};

export default Filter;
