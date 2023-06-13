import React, { useState } from "react";
import { CssBaseline, ThemeProvider, Grow } from "@mui/material";
import { useTranslation } from "react-i18next";

import "./i18n";
import { routes } from "Apps/routes";
import { css } from "@emotion/react";
import { Link } from "@reach/router";
import { Box } from "@mui/system";

const Main = () => {
    return (
        <Box
            css={css`
                padding: "";
            `}
            p={3}>

        </Box>
    );
};

const links = css`
    display: flex;
`;

const routingContainer = css`
border-radius: 8px;
background: rgba(128, 128, 128, 0.1);
`;