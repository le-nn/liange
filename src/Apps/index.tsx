import React, { useState } from "react";
import { CssBaseline, ThemeProvider, Grow } from "@mui/material";
import { lightTheme } from "./theme";
import { useTranslation } from "react-i18next";
import { AppRouterProvider, useAppLocation } from "Libs/Routing/RouterConfig";
import "./i18n";
import { routes } from "Apps/routes";
import { css } from "@emotion/react";
import { Link } from "@reach/router";
import { Box } from "@mui/system";

export const App = () => {
    return (

        <ThemeProvider theme={lightTheme}>
            <Main />
        </ThemeProvider>
    );
};

const Main = () => {
    const { t } = useTranslation();
    const location = useAppLocation();

    return (
        <Box
            css={css`
                padding: "";
            `}
            p={3}>
            <Box p={3}>
                {/* auth translate */}
                <h1>{t("SPA Example with Client Side Routing")}</h1>
            </Box>

            {/* Links */}
            <Box css={links}>
                <Box p={3}>
                    <Link to="app/">Home</Link>
                </Box>
                <Box p={3}>
                    <Link to="app/counter">Counter</Link>
                </Box>
            </Box>

            {/* Animation will be triggered when location.key changed. */}
            <Grow key={location.key} in={true}>
                <Box p={3} css={routingContainer}>
                    {/* Routed contents */}
                    <AppRouterProvider config={routes} />
                </Box>
            </Grow>
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