import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Curtain, useCurtain } from "../contexts/Routes";
import { animate, delay, load } from "doppio";
import { Theme, ThemeProvider, createTheme } from "@mui/material";
import { ScrollContainer } from "mui-extensions/src/ScrollTrigger";

load();

const theme = createTheme({
    typography: {
        fontFamily: "Noto Sans JP, sans-serif",
        fontWeightRegular: 500,
        fontWeightLight: 300,
        fontWeightBold: 700,
        fontWeightMedium: 500,
        h1: {
            fontWeight: 400,
            fontSize: "3.2rem"
        },
        h2: {
            fontWeight: 400,
            fontSize: "2.6rem"
        },
        h3: {
            fontWeight: 400,
            fontSize: "2.4rem"
        },
        h4: {
            fontWeight: 500,
            fontSize: "1.8rem"
        },
        h5: {
            fontWeight: 500,
            fontSize: "1.4rem"
        },
        h6: {
            fontWeight: 500,
            fontSize: "1.1rem"
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: "1.4rem",
            letterSpacing: "0.3rem"
        },
        body1: {
            fontSize: "0.9rem"
        }
    },
});

interface MainProps {
    children: ReactElement[] | JSX.Element | string;
}

export function Main(props: MainProps) {
    return (
        <>
            <Curtain colors={["#468189", "#77aca2", "#9dbebb", "#c4cdc1", "#f4eace", "#dee1dd"]}>
                <Body {...props} />
            </Curtain>
        </>
    );
}

function Body(props: MainProps) {
    const main = React.useRef<HTMLDivElement | null>(null);
    const { open, } = useCurtain();

    React.useEffect(() => {
        open();

        if (main.current) {
            animate(main.current, "opacity", "0", 0);
            delay(200).then(() => {
                if (main.current)
                    animate(main.current, "opacity", "1", 1600, 800);
            });
        }
    }, []);

    return <>
        <ScrollContainer style={{ height: "calc(100vh)", width: "100vw" }}>
            <main ref={main} style={{ opacity: "0", }}>
                <ThemeProvider theme={theme}>
                    {props.children}
                </ThemeProvider>
            </main>
            <footer style={{ background: "#101010", height: "48px" }} className="pa-8 text-center mt-12">
                <p style={{ color: "white" }}>©2023 Liange 尾道 All Rights Reserved.</p>
            </footer>
        </ScrollContainer>
    </>;
}
