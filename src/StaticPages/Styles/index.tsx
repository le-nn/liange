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
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #eee;
}

::-webkit-scrollbar-thumb {
  background: #151515;
  border-radius: 0px;
}

::selection {
    background-color: rgba(17, 182, 208, 0.481);
}

body{
    font-family: 'Noto Sans JP', sans-serif;
}
`;