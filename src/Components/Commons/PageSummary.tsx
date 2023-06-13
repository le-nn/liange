import { Box, Typography } from "@mui/material";
import { useWindowSize } from "mui-extensions/src/Hooks/useWindowSize";
import React, { ReactNode } from "react";
import { SkewAnimation } from "../Animations/SkewAnimation";
import { TransitionStaticImage } from "../TransitionImage";

export const PageSummary = ({
    title,
    subTitle,
    description,
    src
}: {
    title: ReactNode,
    subTitle: string,
    description: ReactNode,
    src?: string,
}) => {
    const size = useWindowSize(500);
    return (
        <Box>
            {
                !!src &&
                <Box
                    style={{
                        minHeight: "300px",
                        height: `${size.innerHeight * 0.58}px`
                    }}
                >
                    <TransitionStaticImage
                        parallaxSlideLength={50}
                    >
                        {style => <img
                            src={src}
                            alt={subTitle}
                            style={style as any}
                        />}
                    </TransitionStaticImage>
                </Box>
            }
            <Box
                px={{ xs: 1, sm: 3, }}
                py={{ xs: 1, sm: 3, md: 4, lg: 5, xl: 6 }}
                minHeight={`${size.innerHeight * 0.42}px`}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Box>
                    <SkewAnimation
                        delay={400}
                        in
                    >
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                lineHeight: { xs: 1.8, sm: 2.2 },
                                letterSpacing: { xs: "0.07em", sm: "0.17em" }
                            }}
                        >
                            {title}
                        </Typography>
                    </SkewAnimation>

                    <Box mt={{ xs: 2, sm: 3, md: 4 }}>
                        <SkewAnimation
                            delay={600}
                            in
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    letterSpacing: "0.2em",
                                    fontFamily: "Jost",
                                }}
                            >
                                {subTitle}
                            </Typography>
                        </SkewAnimation>
                    </Box>

                    <Box mt={{ xs: 2, sm: 3, md: 4 }}>
                        <SkewAnimation
                            delay={800}
                            in
                        >
                            <Typography
                                variant="body2"
                                component="h3"
                                sx={{
                                    lineHeight: { xs: 1.8, sm: 2.2 },
                                    letterSpacing: { xs: "0.07em", sm: "0.17em" },
                                    fontSize: {
                                        xs: "0.82rem",
                                        sm: "0.92rem",
                                        md: "1rem",
                                    }
                                }}>
                                {description}
                            </Typography>
                        </SkewAnimation>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};