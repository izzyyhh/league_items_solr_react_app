import { createContext, useState } from "react";

interface IItemContext {
    reset: true | false;
    addItem: (item: string) => void;
    removeItem: (item: string) => void;
    filter: Array<any>;
}

export const ItemsContext = createContext<IItemContext>({
    reset: false,
    addItem: (item: string) => {},
    removeItem: (item: string) => {},
    filter: Array(),
});

export const useItems = () => {
    const [reset, setReset] = useState<true | false>(false);
    const [filter, setFilter] = useState(Array());

    const addItem = (item: string) => {
        // let array = filter;
        // array.push(item);
        setFilter([...filter, item]);
    };

    const removeItem = (item: string) => {
        const result = filter.filter((word) => word !== item);
        setFilter(result);
    };

    return { reset, filter, addItem, removeItem };
}