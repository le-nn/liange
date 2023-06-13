import { Box, Typography } from "@mui/material";
import { css } from "@mui/material";
import React, { ReactNode } from "react";
import { FadeAndSlideScrollTriggerAnimation } from "../FadeAndSlideScriollTriggerAnimation";

export const SectionTitle2 = ({ title, subTitle }: { title: ReactNode, subTitle?: string }) => {
    return (
        <Box my={{
            xs: 2,
            sm: 3,
            md: 4
        }}
            px={{
                xs: 3
            }}
            mx="auto"
        >
            <FadeAndSlideScrollTriggerAnimation
                transform={{
                    scale: 0.8,
                    translate: {
                        x: "0px",
                        y: "-4rem"
                    }
                }}
                css={css`
                    width: fit-content;
                    margin: 0 auto;
                `}
            >
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        padding: "0px 20px",
                        letterSpacing: {
                            xs: "0.18rem",
                            sm: "0.28em"
                        },
                        lineHeight: {
                            xs: 1.2,
                            sm: 1.6
                        },
                        whiteSpace: "break-spaces",
                        borderLeft: "4px solid #212121",
                        borderRight: "4px solid #212121",
                    }}
                >
                    {title}
                </Typography>
                {
                    !!subTitle &&
                    <Typography
                        variant="body1"
                        component="h2"
                        sx={{
                            letterSpacing: "0.2em",
                            fontFamily: "Jost",
                            borderLeft: "4px solid #212121",
                            borderRight: "4px solid #212121",
                        }}
                    >
                        {subTitle}
                    </Typography>
                }
            </FadeAndSlideScrollTriggerAnimation>
        </Box>
    );
};