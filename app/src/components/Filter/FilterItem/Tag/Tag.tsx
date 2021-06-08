import React, { FunctionComponent, useState } from "react";
import { Label, TagWrapper} from "./Tag.sc";

interface Props {
    tag: string;
}

const Tag: FunctionComponent<Props> = ({ tag }) => {
    const [checked, setChecked] = useState(false);
    if (checked) {
        console.log(tag);
    }
    return (
        <TagWrapper className={checked ? "active" : ""}>
            <Label onClick={() => setChecked(!checked)}>{tag}</Label>
        </TagWrapper>
    );
}

export default Tag;
