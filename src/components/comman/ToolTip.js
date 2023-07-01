import { Tooltip } from "flowbite-react";
import React from "react";

const ToolTip = ({ children, content, placement }) => {
    return (
        <Tooltip
            content={content}
            placement={placement}
            className="bg-white"
        >
            {children}
        </Tooltip >
    );
};

export default ToolTip;