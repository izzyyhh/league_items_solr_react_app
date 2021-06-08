import React, { FunctionComponent } from "react";
import Badge from "./Badge/Badge";
import { Badges, Gold, Image, Item, Title, TitleWrapper } from "./OutputItem.sc";

interface Props {
    item: { id: string; name_t: string; tags: Array<string>, plaintext: string, gold_i: number };
}

const OutputItem: FunctionComponent<Props> = ({ item }) => {
    const src = `../../../assets/img/item/${item.id}.png`
    return (
        <Item>
            <Image src={src} alt={item.name_t} title={item.name_t} />
            <TitleWrapper>
                <Title>{item.name_t}</Title>
                <Badges>
                    {item.tags.map((tag, idx) => <Badge key={idx} tag={tag} />)}
                </Badges>
            </TitleWrapper>
            <Gold>{item.gold_i}</Gold>
        </Item>
    );
};

export default OutputItem;
