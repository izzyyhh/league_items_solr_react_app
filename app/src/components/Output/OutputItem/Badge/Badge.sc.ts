import styled from "styled-components";

interface Props {
    color: string;
}

export const BadgeItem = styled.div<Props>`
    border-left: 5px solid ${(props) => props.color };
    border-radius: 5px;
    background: #091120;
    font-size: 10px;
    padding: 3px 12px 4px;
    margin-right: 10px;
    text-transform: uppercase;
`;