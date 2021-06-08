import { TextField as MUITextField } from "@material-ui/core";
import styled from "styled-components";

export const SearchWrapper = styled.div`
    border: 10px solid #152034;
    display: flex;
    margin-top: 75px;
`;

export const Label = styled.label`
    text-transform: uppercase;
    margin-left: 15px;
    margin-right: 50px;
    line-height: 76px;
`;

export const TextField = styled(MUITextField)`
    && {
        margin-top: auto;
        margin-bottom: auto;
        svg {
            fill: white;
        }
        fieldset {
            border-color: white;
        }
    }
`;