import React from "react";
import { css, Global } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import "./index.css";

export const GlobalStyle = () => {
    return (
        <>
            {/* Reset css */}
            <CssBaseline />
            {/* Global css */}
            <Global styles={global} />
        </>
    );
};

const global = css`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500;700&display=swap');

::-webkit-scrollbar {
  width: 8px!important;
  height: 8px!important;
}

::-webkit-scrollbar-track {
  background: #eee!important;
}

::-webkit-scrollbar-thumb {
  background: #151515!important;
  border-radius: 0px!important;
}

::selection {
    background-color: rgb(110 181 120 / 63%)!important;
}
`;