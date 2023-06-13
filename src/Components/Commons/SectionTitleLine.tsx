import { Box, Typography } from "@mui/material";
import React from "react";
import { FadeAndSlideScrollTriggerAnimation } from "../FadeAndSlideScriollTriggerAnimation";

export const SectionTitle2 = ({ title }: { title: string }) => {
    return (
        <Box my={{
            xs: 3,
            sm: 4,
            md: 6
        }}
            px={{
                xs: 3
            }}
        >
            <FadeAndSlideScrollTriggerAnimation
                transform={{
                    scale: 0.8,
                    translate: {
                        x: "0px",
                        y: "-4rem"
                    }
                }}
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
                            xs: 1.6,
                            sm: 2
                        },
                        borderLeft: "4px solid #212121",
                        borderRight: "4px solid #212121",
                        display: "inline-block",
                    }}
                >
                    {title}
                </Typography>
            </FadeAndSlideScrollTriggerAnimation>
        </Box>
    );
};