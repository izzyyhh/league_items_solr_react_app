import styled from "styled-components";

interface Props {
    color?: string;
    background?: string;
}

export const FilterItemWrapper = styled.div<Props>`
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
    padding: 10px;
    background: ${(props) => props.background};
    border-top: 4px solid ${(props) => props.color};
    width: 141px;
`;

export const Title = styled.p`
    font-weight: 600;
    margin-top: unset;
`;
