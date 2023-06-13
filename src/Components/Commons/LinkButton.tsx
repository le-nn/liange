import { useTheme } from "@mui/material";
import { css } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

export const LinkButton = ({ text, href }: { text: string, href: string }) => {
    const theme = useTheme();
    return (
        <Link
            to="/contact"
            css={[
                a,
                css({
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText
                })
            ]}
        >
            {text}
        </Link>
    );
};

const a = css`
    width: 100%;
    height: 4rem;
    display: flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    opacity: 1;
    transition: all .3s;
    font-size: 1rem;
    border-radius: 8px;

    &:hover {
        opacity:.8;
        transition:all .3s;
    }
`;