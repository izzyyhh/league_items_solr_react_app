import { createContext, useState } from "react";

interface IItemContext {
    reset: true | false;
    addItem: (item: string) => void;
    filter: string;
}

export const ItemsContext = createContext<IItemContext>({ reset: false, addItem: (item: string) => {}, filter: "" });

export const useItems = () => {
    const [reset, setReset] = useState<true | false>(false);
    const [filter, setFilter] = useState("");

    const addItem = (item: string) => {
        setFilter(`${filter} AND ${item}`);
    }

    return { reset, filter, addItem };
}