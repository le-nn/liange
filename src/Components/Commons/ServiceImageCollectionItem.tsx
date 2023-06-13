import { css } from "@emotion/react";
import { Box, Grow, Typography, useTheme } from "@mui/material";
import { Link } from "gatsby";
import { ScrollTrigger } from "mui-extensions/src/ScrollTrigger";
import React, { ReactNode } from "react";
import { FadeAndSlideAnimation } from "../Animations/FadeAndSlideAnimation";
import { TransitionImage } from "../TransitionImage";

export const ServiceImageCollectionItem = ({
    src,
    title,
    description
}: {
    src: string,
    title: string,
    description?: ReactNode
}) => {
    const theme = useTheme();

    return (
        <ScrollTrigger
            once
            scrollEndOffset={120}
            css={css({ height: "100%", overflow: "hidden" })}
        >
            {
                state => (
                    <Grow
                        in={state === "entered"}
                    >
                        <Box css={css({ height: "100%" })}>
                            {/* background */}
                            <Box css={css({ height: "100%" })}>
                                <TransitionImage
                                    src={src}
                                    alt={title}
                                    parallaxSlideLength={50}
                                    scale={{
                                        from: 0.94,
                                        to: 1,
                                    }}
                                    css={css({ height: "100%" })}
                                />
                            </Box>
                            {/* foreground inner */}
                            <Box
                                css={css`
                                        backdrop-filter: blur(4px);
                                        background-color: rgba(255, 255, 255, 0.253);
                                        position: absolute;
                                        width: 70%;
                                        height: 70%;
                                        top: 0;
                                        margin: auto;
                                        bottom: 0;
                                        right: 0;
                                        left: 0;
                                        border-radius: 20px;
                                    `}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    color: theme.palette.text.primary,
                                }}
                                p={{
                                    xs: 2,
                                    sm: 1,
                                    md: 2,
                                    lg: 4
                                }}
                            >
                                <FadeAndSlideAnimation
                                    delay={400}
                                    in={state === "entered"}
                                >
                                    <Box
                                        p={{
                                            xs: 0.5,
                                            sm: 1,
                                            md: 1.5,
                                            lg: 2
                                        }}
                                        mt={1}
                                        sx={{
                                            display: "flex",
                                            alignItems: "baseline"
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            sx={{
                                                letterSpacing: {
                                                    xs: "0.07em",
                                                    sm: "0.12em",
                                                    md: "0.17rem"
                                                },
                                                fontSize: {
                                                    xs: "0.78rem",
                                                    sm: "0.84rem",
                                                    md: "0.92rem",
                                                    lg: "1rem"
                                                }
                                            }}
                                        >
                                            {title}
                                        </Typography>
                                    </Box>
                                </FadeAndSlideAnimation>
                                {
                                    description && <FadeAndSlideAnimation
                                        delay={400}
                                        in={state === "entered"}
                                    >
                                        <Box
                                            p={{
                                                xs: 0.5,
                                                sm: 1,
                                                md: 1.5,
                                                lg: 2
                                            }}
                                            mt={1}
                                            sx={{
                                                display: "flex",
                                                alignItems: "baseline"
                                            }}
                                        >
                                            <Typography
                                                variant="body1"
                                                component="p"
                                                sx={{
                                                    letterSpacing: {
                                                        xs: "0.07em",
                                                        sm: "0.12em",
                                                        md: "0.17"
                                                    },
                                                }}
                                            >
                                                {description}
                                            </Typography>
                                        </Box>
                                    </FadeAndSlideAnimation>
                                }
                            </Box>
                        </Box>
                    </Grow>
                )
            }
        </ScrollTrigger >
    );
};