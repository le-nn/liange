import { CSSProperties } from "react";
import { css } from "@mui/material";
import { ScrollTrigger } from "mui-extensions/src/ScrollTrigger";
import { lerp } from "mui-extensions/src/Utils/Math/lerp";
import React, { ReactNode } from "react";

interface TransitionImageProps {
    src: string;
    alt: string;
    parallaxSlideLength?: number;
    scale?: {
        from?: number;
        to?: number;
    }
    style?: CSSProperties;
    className?: string;
}

export const TransitionImage = (props: TransitionImageProps) => {
    const { scale } = props;
    const range = Math.abs(props.parallaxSlideLength ?? 50);
    const half = range * 0.5;
    const getPosition = (t: number) => lerp(-half, half, t);
    const getScale = (t: number) => lerp(
        scale?.from ?? 0.97,
        scale?.to ?? 1,
        t
    );

    return (
        <ScrollTrigger
            once
            scrollEndOffset={"100% + 40vh"}
            scrollStartOffset="-20vh"
            style={props.style}
            className={props.className}
        >
            {
                (state, info) => <>
                    <div style={{
                        transition: "all 3s cubic-bezier(0.51, 0.15, 0.25, 0.97)",
                        opacity: state === "entered" ? 1 : 0,
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        transform: state === "entered" ? "translateY(0)" : "translateY(30px)",
                    }}>
                        <div style={{
                            height: `calc(100% + ${range}px)`,
                            width: "100%",
                            transition: "all 1.5s cubic-bezier(0.13, 0.59, 0.01, 0.98)",
                            transform: state === "entered" ? `translateY(${getPosition(info.scrollProgress)}px) scale(${getScale(info.scrollProgress)})` : "",
                        }}>
                            <img
                                src={props.src}
                                alt={props.alt}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                    transition: "all 2.4s cubic-bezier(0.51, 0.15, 0.25, 0.97)",
                                    transform: state === "entered" ? `scale(1.3)` : "scale(1.5)",
                                }}
                            />
                        </div>
                    </div>
                </>
            }
        </ScrollTrigger>
    );
};

export interface TransitionStaticImageProps {
    children: (style: CSSProperties) => ReactNode;
    parallaxSlideLength?: number;
    className?: string;
    style?: CSSProperties;
}

export const TransitionStaticImage = (props: TransitionStaticImageProps) => {
    const range = Math.abs(props.parallaxSlideLength ?? 50);
    const half = range * 0.5;
    const getPosition = (t: number) => lerp(-half, half, t);
    const getScale = (t: number) => lerp(0.97, 1, t);

    return (
        <ScrollTrigger
            once
            scrollEndOffset={"100% + 40vh"}
            scrollStartOffset="-20vh"
            style={props.style}
            className={props.className}
            css={css`
                height: 100%;
            `}
        >
            {
                (state, info) => <>
                    <div style={{
                        transition: "all 3s cubic-bezier(0.51, 0.15, 0.25, 0.97)",
                        opacity: state === "entered" ? 1 : 0,
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        transform: state === "entered" ? "translateY(0)" : "translateY(30px)",
                    }}>
                        <div style={{
                            height: `calc(100% + ${range}px)`,
                            width: "100%",
                            transition: "all 1.5s cubic-bezier(0.13, 0.59, 0.01, 0.98)",
                            transform: state === "entered" ? `translateY(${getPosition(info.scrollProgress)}px) scale(${getScale(info.scrollProgress)})` : "",
                        }}>
                            {props.children({
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                transition: "all 2.4s cubic-bezier(0.51, 0.15, 0.25, 0.97)",
                                transform: state === "entered" ? `scale(1.3)` : "scale(1.5)",
                            })}
                        </div>
                    </div>
                </>
            }
        </ScrollTrigger>
    );
};