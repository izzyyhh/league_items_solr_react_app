import React, { FunctionComponent, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const BasicLayout: FunctionComponent<Props> = ({ children }) => {
    return (
        <>
            <p>Test</p>
            {children}
        </>
    )
}

export default BasicLayout;
