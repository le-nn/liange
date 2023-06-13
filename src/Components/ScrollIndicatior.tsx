import { ArrowUpward, KeyboardReturnOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { css } from "@mui/material";
import { useWindowSize } from "mui-extensions/src/Hooks/useWindowSize";
import { useScrollContext } from "mui-extensions/src/ScrollTrigger";
import React, { useEffect, useState } from "react";

export const ScrollIndicator = () => {
    const scrollContext = useScrollContext();
    const size = useWindowSize(500);

    return <Box
        style={{
            bottom: `calc(100vh - ${size.innerHeight}px + 20px)`,
        }}
        css={container}
        p={{
            xs: 0,
            md: 2
        }}
    >
        <div >
            SCROLL
        </div>
        <div css={bar}></div>

        <IconButton
            onClick={() => scrollContext.scrollTo(0)}
            size="small"
            sx={{
                border: "2px solid #00000071"
            }}
        >
            <ArrowUpward fontSize="large" />
        </IconButton>
    </Box>;
};

const container = css`
    position: fixed;
    writing-mode: vertical-rl;
    display: flex;
    align-items: center;
    right: 12px;
    font-family: "Jost";
    letter-spacing: 0.6em;
    font-size: 0.5rem;
`;

const bar = css`
    display: block;
    margin: 0.8rem auto;
    width: 1px;
    height: 60px;
    background-color: #333;
    position: relative;
    z-index: 0;

    &:after {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #080808;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: -24.155vw;
        right: -24.155vw;
        margin: 0 auto;
        animation: 3.2s scrollanimeB ease infinite 3.32s;
        transform: translate(0, -50%) scale(0);
    }

    @keyframes scrollanimeB {
        0% {
            top: 0;
            opacity: 1;
            transform: translate(0,-50%) scale(0)
        }

        5% {
            top: 0;
            opacity: 1;
            transform: translate(0,-50%) scale(1)
        }

        75% {
            top: 100%;
            opacity: 1;
            transform: translate(0,-50%) scale(1)
        }

        100% {
            top: 100%;
            opacity: 0;
            transform: translate(0,-50%) scale(1)
        }
    }

`;