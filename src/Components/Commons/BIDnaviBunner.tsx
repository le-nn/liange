import { Typography } from "@mui/material";
import { Box, css } from "@mui/system";
import { Link } from "gatsby";
import React from "react";
import { useTranslation } from "react-i18next";
import { FadeAndSlideScrollTriggerAnimation } from "../FadeAndSlideScriollTriggerAnimation";

export const BIDnaviBunner = () => {
    const { t } = useTranslation();
    return <Box
        my={{
            xs: 4,
            sm: 12,
            md: 16
        }}
        mx="auto"
        css={css`
            max-width: 1080px;
            opacity: 1;
            position: relative;
            transition: all .3s;
            &:hover{
                opacity: 0.8;
            }
        `}
    >
        <FadeAndSlideScrollTriggerAnimation
            transform={{
                translate: {
                    x: "-10px",
                    y: "10px"
                },
                rotate: "0deg",
                scale: 0.94,
            }}
        >
            <Link
                to="https://bidnavi.jp"
                target="_blank"
                css={css`
                    color: #000;
                    display: block;
                    padding: 5rem 0;
                    text-decoration: none;
                `}
            >
                <Box
                    css={css`
                align-items: center;
                background-color: rgba(255,255,255,.6);
                display: flex;
                justify-content: center;
                margin: 0;
                flex-wrap: wrap;
                padding: 1.5rem 1rem;
            `}
                >
                    <Box p={0.5}>
                        <img
                            src="/images/BIDNAVILOGO.png"
                            alt="BIDNAVI"
                        />
                    </Box>
                    <Box p={0.5} ml={2}>
                        <Typography variant="overline">
                            {t("全国のプロポーザル・入札・補助金・助成金 検索")}
                        </Typography>
                    </Box>
                </Box>
            </Link>
            <img
                css={css`
                height: 100%;
                left: 50%;
                -o-object-fit: cover;
                object-fit: cover;
                position: absolute;
                top: 50%;
                transform: translate(-50%,-50%);
                width: 100%;
                z-index: -1;
            `}
                src="/images/BIDNAVI_LinkBG.jpg"
                alt="BIDnavi"
            />
        </FadeAndSlideScrollTriggerAnimation>
    </Box>;
};