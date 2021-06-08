import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { ItemsContext } from "../../../../hooks/useItems/useItems";
import { Label, TagWrapper} from "./Tag.sc";

interface Props {
    tag: string;
}

const Tag: FunctionComponent<Props> = ({ tag }) => {
    const [checked, setChecked] = useState(false);
    const { addItem, removeItem } = useContext(ItemsContext);

    useEffect(() => {
        if (checked) {
            addItem(tag);
        } else {
            removeItem(tag);
        }
    }, [checked]);

    return (
        <TagWrapper className={checked ? "active" : ""}>
            <Label onClick={() => setChecked(!checked)}>{tag}</Label>
        </TagWrapper>
    );
}

export default Tag;
