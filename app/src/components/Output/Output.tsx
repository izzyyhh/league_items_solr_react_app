import React, { FunctionComponent, useContext } from "react";
import { ItemsContext } from "../../hooks/useItems/useItems";
import { OutputWrapper } from "./Output.sc";
import OutputItem from "./OutputItem/OutputItem";

interface Props {
    data?: any;
}

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

const Output: FunctionComponent<Props> = ({data}) => {
    return (
        <OutputWrapper>
            {data?.map((item: any) => <OutputItem item={item} />)}
        </OutputWrapper>
    );
};

export default Output;
