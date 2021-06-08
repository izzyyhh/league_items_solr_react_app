import React, { FunctionComponent } from "react";
import { ItemsContext, useItems } from "../../hooks/useItems/useItems";

export const ItemProvider: FunctionComponent = ({ children }) => {
    const {reset, filter, addItem} = useItems();

    return (
        <ItemsContext.Provider value={{reset: reset, filter: filter, addItem: addItem}}>
            {children}
        </ItemsContext.Provider>
    )
}