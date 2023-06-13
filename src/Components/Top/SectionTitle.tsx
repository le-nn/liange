import { Box, Typography } from "@mui/material";
import React from "react";
import { FadeAndSlideScrollTriggerAnimation } from "../FadeAndSlideScriollTriggerAnimation";

export const SectionTitle = ({ title }: { title: string }) => {
    return (
        <Box my={{
            xs: 4,
            sm: 6,
            md: 8
        }}
            px={{
                xs: 3
            }}
        >
            <FadeAndSlideScrollTriggerAnimation
                transform={{
                    translate: {
                        x: "-15px",
                        y: "30px"
                    }
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        paddingBottom: "8px",
                        letterSpacing: {
                            xs: "0.07",
                            sm: "0.1em"
                        },
                        fontWeight: 700,
                        borderBottom: "4px solid #b5b0b0",
                        display: "inline-block",
                                        fontFamily: "Jost",
                    }}
                >
                    {title}
                </Typography>
            </FadeAndSlideScrollTriggerAnimation>
        </Box>
    );
};