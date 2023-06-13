import { css } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

export const LinkButton = ({ text, href }: { text: string, href: string }) => {
    return (
        <Link to={href}
            css={btn}>
            {text}
        </Link>
    );
};

const btn = css`
    display: inline-block;
    width: 200px;
    height: 54px;
    line-height: 54px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    outline: none;
    position: relative;
    z-index: 2;
    background-color: #212121;
    border: 2px solid #212121;
    color: #fff;
    line-height: 50px;

    &::before,
    &::after {
        position: absolute;
        z-index: -1;
        display: block;
        content: '';

        top: 0;
        width: 50%;
        height: 100%;
        background-color: #212121;
    }

    &,
    &::before,
    &::after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: all .3s;
        transition: all .3s;
    }

    &:hover {
        background-color: #fff;
        border-color: #212121;
        color: #212121;
    }

    &::before {
        right: 0;
    }

    &::after {
        left: 0;
    }

    &:hover::before,
    &:hover::after {
        width: 0;
        background-color: #212121;
    }
`;