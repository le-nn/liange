import { css } from "@emotion/react";
import { Grow } from "@mui/material";
import { ScrollTrigger } from "mui-extensions/src/ScrollTrigger";
import React, { ReactNode } from "react";

interface GrowScrollTriggerAnimationAnimationProps {
    children: ReactNode;
    delay?: number;
    forceIn?: boolean;
}

export const GrowScrollTriggerAnimation = ({ children, delay, forceIn }: GrowScrollTriggerAnimationAnimationProps) => {
    return <ScrollTrigger
        css={css`
            height: 100%;
            width: 100%;
        `}
        forceIn={forceIn}
        once
        delay={delay}
    >
        {(status, info) => {

            return (
                <Grow in={status === "entered"}>
                    <div
                        css={css`
            height: 100%;
            width: 100%;
        `}>
                        {children}
                    </div>
                </Grow>
            );
        }}
    </ScrollTrigger>;
};