import { css } from "@emotion/react";
import { Box, Grow, Typography, useTheme } from "@mui/material";
import { Link } from "gatsby";
import { ScrollTrigger, ScrollTriggerTransition } from "mui-extensions/src/ScrollTrigger";
import React, { ReactNode } from "react";
import { FadeAndSlideAnimation } from "../Animations/FadeAndSlideAnimation";
import { TransitionImage } from "../TransitionImage";

interface ServiceItemContainerProps {
    to: string;
    title: string;
    service: string;
    detail: ReactNode;
    src: string;
    commingSoon?: boolean;
}

export const ServiceItemContainer = (props: ServiceItemContainerProps) => {
    const {
        to,
        title,
        service,
        detail,
        src,
        commingSoon
    } = props;

    const theme = useTheme();

    return (
        <ScrollTrigger
            once
            scrollEndOffset={120}
        >
            {
                state => (
                    <Grow
                        in={state === "entered"}
                    >
                        <Link to={to}>
                            <Box position="relative">
                                {/* background */}
                                <Box>
                                    <TransitionImage
                                        src={src}
                                        alt={title}
                                        parallaxSlideLength={50}
                                        scale={{
                                            from: 0.94,
                                            to: 1,
                                        }}
                                    />
                                </Box>
                                {/* foreground inner */}
                                <Box
                                    css={css`
                                        backdrop-filter: blur(4px);
                                        background-color: rgba(255, 255, 255, 0.253);
                                        position: absolute;
                                        width: 84%;
                                        height: 84%;
                                        top: 0;
                                        margin: auto;
                                        bottom: 0;
                                        right: 0;
                                        left: 0;
                                        border-radius: 28px;
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
                                        delay={0}
                                        in={state === "entered"}
                                        transform={{
                                            rotate: "-4deg"
                                        }}
                                        css={css({
                                            width: "100%",
                                        })}
                                    >
                                        <Box
                                            p={{
                                                xs: 0.5,
                                                sm: 1,
                                                md: 1.5,
                                                lg: 2
                                            }}
                                            sx={{
                                                width: "100%",
                                            }}
                                            maxWidth="360px"
                                        >
                                            <Typography
                                                variant="h4"
                                                component="h2"
                                                sx={{
                                                    letterSpacing: {
                                                        xs: "0.2em",
                                                        sm: "0.1em",
                                                        md: "0.2em",
                                                    },
                                                    lineHeight: {
                                                        xs: 1.4,
                                                        sm: 1.2,
                                                        md: 1.6,
                                                    },
                                                    paddingBottom: {
                                                        xs: "0.1rem",
                                                        sm: "0.2rem",
                                                        md: "0.4rem"
                                                    },
                                                    fontSize: {
                                                        xs: "1.3rem",
                                                        sm: "1.2rem",
                                                        md: "1.4rem",
                                                        lg: "1.6rem"
                                                    },
                                                    border: `0.14rem solid ${theme.palette.text.primary}`
                                                }}
                                            >
                                                {title}
                                            </Typography>
                                        </Box>
                                    </FadeAndSlideAnimation>

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
                                                variant="h5"
                                                component="h3"
                                                sx={{
                                                    letterSpacing: {
                                                        xs: "0.07em",
                                                        sm: "0.12em",
                                                        md: "0.17"
                                                    },
                                                    fontSize: {
                                                        xs: "1.1rem",
                                                        sm: "0.9rem",
                                                        md: "1.2rem",
                                                        lg: "1.3rem"
                                                    }
                                                }}
                                            >
                                                {service}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                component="h5"
                                                sx={{
                                                    marginLeft: "12px",
                                                    letterSpacing: {
                                                        xs: "0.07em",
                                                        sm: "0.17em"
                                                    },
                                                    fontSize: {
                                                        xs: "0.76rem",
                                                        sm: "0.66rem",
                                                        md: "0.82rem",
                                                        lg: "0.96rem"
                                                    }
                                                }}
                                            >
                                                SERVICE
                                            </Typography>
                                        </Box>
                                    </FadeAndSlideAnimation>

                                    <FadeAndSlideAnimation
                                        delay={800}
                                        in={state === "entered"}
                                    >
                                        <Box p={{
                                            xs: 0.5,
                                            sm: 1,
                                            md: 1.5,
                                            lg: 2
                                        }}
                                            maxWidth="360px"
                                        >
                                            <Typography
                                                variant="body2"
                                                component="p"
                                                sx={{
                                                    lineHeight: {
                                                        xs: 1.5,
                                                        sm: 1.4,
                                                        md: 1.6,
                                                        lg: 1.8
                                                    },
                                                    textAlign: "left",
                                                    letterSpacing: {
                                                        xs: "0.05em",
                                                        sm: "0.04em",
                                                        md: "0.09em",
                                                        lg: "0.13rem"
                                                    },
                                                    fontSize: {
                                                        xs: "0.88rem",
                                                        sm: "0.72rem",
                                                        md: "0.94rem"
                                                    }
                                                }}
                                            >
                                                {detail}
                                            </Typography>
                                        </Box>
                                    </FadeAndSlideAnimation>
                                </Box>

                                {commingSoon &&
                                    <div
                                        css={css({
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            margin: "auto",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.8rem",
                                            background: "#464646ae",
                                            color: "white"
                                        })}
                                    >
                                        COMMING SOON
                                    </div>
                                }
                            </Box>
                        </Link>
                    </Grow>
                )
            }
        </ScrollTrigger >
    );
};