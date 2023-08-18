import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Curtain, useCurtain } from "../contexts/Routes";
import { Theme, ThemeProvider, createTheme } from "@mui/material";
import { ScrollContainer } from "mui-extensions/src/ScrollTrigger";
import { GlobalStyle } from "StaticPages/Styles";

/**
 * delay
 * @param msec milliseconds
 */
export function delay(msec: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, msec));
}

/**
 * animate element
 * @param element animate element
 * @param property animate style propery
 * @param value style value
 * @param duration animation time (ms)
 * @param deleyTime animation delay time (ms)
 */
export async function animate(element: HTMLElement, property: string, value: string, duration: number, deleyTime = 0): Promise<void> {
    const tmp = element.style.transition;
    element.style.transition = "all " + duration + "ms";
    await delay(deleyTime);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (element.style as any)[property] = value;
    await delay(duration);
    element.style.transition = tmp;
}


const theme = createTheme({
    typography: {
        fontFamily: "Noto Sans JP, sans-serif",
        fontWeightRegular: 500,
        fontWeightLight: 300,
        fontWeightBold: 700,
        fontWeightMedium: 500,
        h1: {
            fontWeight: 300,
            fontSize: "3.2rem"
        },
        h2: {
            fontWeight: 300,
            fontSize: "2.6rem"
        },
        h3: {
            fontWeight: 300,
            fontSize: "2.4rem"
        },
        h4: {
            fontWeight: 400,
            fontSize: "1.8rem",
        },
        h5: {
            fontWeight: 400,
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
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Curtain colors={["#468189", "#77aca2", "#9dbebb", "#c4cdc1", "#f4eace", "#dee1dd"]}>
                    <Body {...props} />
                </Curtain>
            </ThemeProvider>
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
                {props.children}
            </main>
            <footer style={{ background: "#101010", height: "48px" }} className="pa-8 text-center mt-12">
                <p style={{ color: "white" }}>©2023 Liange 尾道 All Rights Reserved.</p>
            </footer>
        </ScrollContainer>
    </>;
}
