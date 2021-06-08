import React, { FunctionComponent, useContext } from "react";
import { ItemsContext } from "../../hooks/useItems/useItems";
import { OutputWrapper } from "./Output.sc";
import OutputItem from "./OutputItem/OutputItem";

const getString = (words: Array<string>) => {
    let output = "";
    words.forEach((word, idx) => {
        if (idx > 0) {
            output += ` AND tags:${word}`;
        } else {
            output += `tags:${word}`;
        }
    });
    return output;
};

const test = [
    {
        id: "1001",
        name_t: "Boots",
        tags: ["Boots"],
        plaintext: "blalasnbdfansd",
        gold_i: 300,
    },
    {
        id: "1004",
        name_t: "Aegis if the Legion",
        tags: ["Magic Resist", "Armor", "Ability Haste"],
        plaintext: "blalasnbdfansd",
        gold_i: 1500,
    },
    {
        id: "1006",
        name_t: "Dead Dance",
        tags: ["Armor", "Damage", "Life Steal", "Ability Haste"],
        plaintext: "blalasnbdfansd",
        gold_i: 2900,
    },
    {
        id: "1011",
        name_t: "Emberknife",
        tags: ["Damage", "Mana Regen", "Jungling"],
        plaintext: "blalasnbdfansd",
        gold_i: 2900,
    },
    {
        id: "1011",
        name_t: "Your Cut",
        tags: ["Consumable"],
        plaintext: "blalasnbdfansd",
        gold_i: 0,
    },
];

const Output: FunctionComponent = () => {
    const {filter} = useContext(ItemsContext);
    console.log(getString(filter));
    return (
        <OutputWrapper>
            {test.map((item) => <OutputItem item={item} />)}
        </OutputWrapper>
    );
};

export default Output;
