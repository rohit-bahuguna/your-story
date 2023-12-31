import { Tooltip } from "flowbite-react";
import React from "react";

const ToolTip = ({ children, content, placement }) => {
    return (
        <Tooltip
            content={content}
            placement={placement}
            className=""
        >
            {children}
        </Tooltip >
    );
};

export default ToolTip;