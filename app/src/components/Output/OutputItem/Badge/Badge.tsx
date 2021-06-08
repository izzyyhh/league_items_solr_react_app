import React, { FunctionComponent } from "react";
import { BadgeItem } from "./Badge.sc";

interface Props {
    tag: string;
}

const start = ["Jungling", "Laning"];
const tools = ["Consumable", "Gold Income", "Vision & Trinket" ];
const defense = ["Armor", "Health", "Health Regen", "Magic Resist", "Omni Vamp"];
const attack = ["Attack Speed", "Crtical Strike", "Damage", "Life Steal", "Lethality" ];
const magic = ["Ability Haste", "Mana", "Mana Regen", "Ability Power", "Heal & Shield", "Power"];
const movement = ["Boots", "Other Movement"];

const checkStart = (tag: string) => {
    const idx = start.indexOf(tag);
    return idx >= 0;
};

const checkTools = (tag: string) => {
    const idx = tools.indexOf(tag);
    return idx >= 0;
};

const checkMovement = (tag: string) => {
    const idx = movement.indexOf(tag);
    return idx >= 0;
};

const checkDefense = (tag: string) => {
    const idx = defense.indexOf(tag);
    return idx >= 0;
};

const checkAttack = (tag: string) => {
    const idx = attack.indexOf(tag);
    return idx >= 0;
};

const checkMagic = (tag: string) => {
    const idx = magic.indexOf(tag);
    return idx >= 0;
};


const Badge: FunctionComponent<Props> = ({ tag }) => {
    
    if (checkStart(tag)) {
        return (
            <BadgeItem color="#007236">{tag}</BadgeItem>
        )
    }

    if (checkTools(tag)) {
        return (
            <BadgeItem color="#c06bdc">{tag}</BadgeItem>
        )
    }

    if (checkDefense(tag)) {
        return (
            <BadgeItem color="#f0ae06">{tag}</BadgeItem>
        )
    }

    if (checkAttack(tag)) {
        return (
            <BadgeItem color="#fe5752">{tag}</BadgeItem>
        )
    }

    if (checkMagic(tag)) {
        return (
            <BadgeItem color="#12bdbb">{tag}</BadgeItem>
        )
    }

    if (checkMovement(tag)) {
        return (
            <BadgeItem color="#98b3dd">{tag}</BadgeItem>
        )
    }

    return(<></>)
}

export default Badge;
