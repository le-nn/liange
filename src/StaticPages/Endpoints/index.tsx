/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from "react";

import "normalize.css";
import "doppio";
import "../styles/index.css";

import { useCurtain } from "../contexts/Routes";
import { MainPanel } from "StaticPages/Views/Main/MainPanel";
import { Main } from "StaticPages/Components/frame";
import { ConceptsPanel } from "StaticPages/Views/Main/Concepts";
import { Profile } from "StaticPages/Views/Main/Profile";
import { Box } from "@mui/material";
import { MenuBoard } from "StaticPages/Views/Main/Menu";
import { Explain } from "StaticPages/Views/Main/Explain";
import { Access } from "StaticPages/Views/Main/Access";

// markup
export default () => {
    return (
        <Main>
            <MainPanel />
            <div className="white-panel"></div>

            <Box p={{ xs: 2, sm: 3, md: 4 }}
                mt={{ xs: 4, sm: 8, md: 12 }}
                sx={{ maxWidth: "1280px" }} mx="auto">
                <ConceptsPanel />
            </Box>

            <Box p={{ xs: 2, sm: 3, md: 4 }} sx={{ maxWidth: "1280px" }} mx="auto">
                <Profile />
            </Box>

            <Box p={{ xs: 2, sm: 3, md: 4 }} sx={{ maxWidth: "1280px" }} mx="auto">
                <MenuBoard />
            </Box>

            <Box p={{ xs: 2, sm: 3, md: 4 }} sx={{ maxWidth: "1280px" }} mx="auto">
                <Explain />
            </Box>

            <Box p={{ xs: 2, sm: 3, md: 4 }} sx={{ maxWidth: "1280px" }} mx="auto">
                <Access />
            </Box>

            <Box p={{ xs: 2, sm: 3, md: 4 }} sx={{ maxWidth: "1280px" }} mx="auto">
                <div style={{ borderBottom: "2px solid currentColor" }} />
            </Box>
        </Main >
    );
};

