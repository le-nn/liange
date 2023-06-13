import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { FadeAndSlideScrollTriggerAnimation } from "../FadeAndSlideScriollTriggerAnimation";

export const SectionText1 = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <FadeAndSlideScrollTriggerAnimation
            css={css({
                maxWidth: "1080px",
                margin: "1rem auto"
            })}
            transform={{
                scale: 0.8,
                translate: {
                    x: "0px",
                    y: "2rem"
                },
                rotate: "-2deg"
            }}
        >
            <Typography
                variant="body1"
                component="p"
                textAlign="left"
                className={className}
            >
                {children}
            </Typography>
        </FadeAndSlideScrollTriggerAnimation>
    );
};