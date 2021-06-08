import React, { FunctionComponent, ReactNode } from "react";
import { BasicLayoutWrapper } from "./BasicLayout.sc";

interface Props {
    children?: ReactNode;
}

const BasicLayout: FunctionComponent<Props> = ({ children }) => {
    return (
        <BasicLayoutWrapper>
            {children}
        </BasicLayoutWrapper>
    )
}

export default BasicLayout;
