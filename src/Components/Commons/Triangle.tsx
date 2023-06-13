import { css } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Triangle = () => {

    return (
        <Box
            css={style}
        />
    );
};

const style = css`
    display: inline-block;
    vertical-align: middle;
    color: #B7B7B7;
    line-height: 1;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    border-width: 0.64952em 0.375em;
    border-top-color: currentColor;
    border-bottom: 0;
    font-size: 3rem;  
`;