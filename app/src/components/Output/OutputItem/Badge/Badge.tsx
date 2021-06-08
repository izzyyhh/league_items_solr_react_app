import React, { FunctionComponent } from "react";
import { BadgeItem } from "./Badge.sc";

interface Props {
    tag: string;
}

const start = ["Jungle", "Lane"];
const tools = ["Consumable", "GoldPer", "VisionTrinket" ];
const defense = ["Armor", "Health", "HealthRegen", "MagicResist", "OmniVamp", "SpellBlock"];
const attack = ["AttackSpeed", "CriticalStrike", "Damage", "LifeSteal", "Lethality", "SpellVamp", "OnHit"];
const magic = ["AbilityHaste", "Mana", "ManaRegen", "AbilityPower", "HealShield", "Power", "SpellDamage"];
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
