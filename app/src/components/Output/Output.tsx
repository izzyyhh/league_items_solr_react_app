import React, { FunctionComponent, useContext } from "react";
import { ItemsContext } from "../../hooks/useItems/useItems";

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

const Output: FunctionComponent = () => {
    const {filter} = useContext(ItemsContext);
    console.log(getString(filter));
    return (
        <>
            <p>Output</p>
        </>
    );
};

export default Output;
