import React, { FunctionComponent} from "react";
import { Filters, FilterWrapper, Label, LabelField } from "./Filter.sc";
import FilterItem from "./FilterItem/FilterItem";

const data = [
    {
        title: "Starter Items",
        taps: ["Jungle", "Lane"],
        color: "#007236",
        background: "#223148",
    },
    {
        title: "Tools",
        taps: ["Consumable", "GoldPer", "Vision & Trinket" ],
        color: "#c06bdc",
        background: "#19283f",
    },
    {
        title: "Defense",
        taps: ["Armor", "Health", "Health Regen", "Magic Resist", "Omni Vamp"],
        color: "#f0ae06",
        background: "#223148",
    },
    {
        title: "Attack",
        taps: ["Attack Speed", "Critical Strike", "Damage", "Life Steal", "Lethality" ],
        color: "#fe5752",
        background: "#19283f",
    },
    {
        title: "Magic",
        taps: ["Ability Haste", "Mana", "Mana Regen", "Ability Power", "Heal & Shield", "Power"],
        color: "#12bdbb",
        background: "#223148",
    },
    {
        title: "Movement",
        taps: ["Boots", "Other Movement"],
        color: "#98b3dd",
        background: "#19283f",
    },
];

const Filter: FunctionComponent = () => {
    return (
        <FilterWrapper>
            <LabelField>
                <Label>Item</Label>
                <Label>Filters</Label>
            </LabelField>
            <Filters>
                {data.map((item, idx) => <FilterItem key={idx} title={item.title} taps={item.taps} color={item.color} background={item.background}/>)}
            </Filters>
        </FilterWrapper>
    );
};

export default Filter;
