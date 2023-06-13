import { Box, Typography } from "@mui/material";
import { css } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

export const ViewMoreButton = (
    {
        href,
        title,
        subTitle,
    }: {
        href: string,
        title?: string
        subTitle?: string
    }
) => {

    return (
        <Link to={href} css={css`
            text-decoration:none;
        `}>
            <Box css={a}>
                {
                    title && <Typography
                        variant="body2"
                        sx={{
                            fontSize: {
                                xs: "0.7rem",
                            },
                            userSelect: "none"
                        }}
                    >
                        {title}
                    </Typography>
                }
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: "'Jost', 'Noto Sans JP', sans-serif",
                        userSelect: "none"
                    }}>
                    {subTitle}
                </Typography>
            </Box>
        </Link>
    );
};

const a = css`
    font-family: 'Jost', sans-serif;
    position: relative;
    padding: 2.4rem;
    padding-bottom: 1.4rem;
    padding-top: 0.6rem;
    border: 0.08rem solid #000;
    font-size: 0.9rem;
    line-height: 1.6;
    text-align: left;
    transition: all .2s;
    box-sizing: border-box;
    color: #212121;
    text-align: center;

    &::after{
        content: "";
        position: absolute;
        width: 34px;
        height: 5px;
        left:0;
        right: 0;
        bottom: 1rem;
        margin: auto;
        background: url(/images/Arrow.svg) 0 0 no-repeat;
        background-size: 34px 4.6px;
        transition: all .3s;
    }

    &:hover::after {
        left:1rem;
    }
`;
console.log(a);