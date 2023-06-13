import { css } from "@emotion/react";
import { ScrollTrigger, ScrollTriggerTransition } from "mui-extensions/src/ScrollTrigger";
import React, { CSSProperties, ReactNode } from "react";
import { FadeAndSlideAnimation } from "./Animations/FadeAndSlideAnimation";

interface FadeAndSlideScrollTriggerAnimationProps {
    children: ReactNode;
    delay?: number;
    forceIn?: boolean;
    transform?: {
        translate: {
            x?: string;
            y?: string;
        }
        rotate?: string;
        scale?: number;
        // eslint-disable-next-line @typescript-eslint/ban-types
        transformOrigin?: "bottom" | "center" | "left" | "right" | "top" | (string & {});
    }
    style?: CSSProperties;
    className?: string;
}

export const FadeAndSlideScrollTriggerAnimation = ({ children, delay, forceIn, transform, style, className }: FadeAndSlideScrollTriggerAnimationProps) => {
    return (
        <ScrollTrigger
            forceIn={forceIn}
            delay={delay}
            once
            style={style}
            className={className}
        >
            {state =>
                <FadeAndSlideAnimation
                    in={state === "entered"}
                    delay={delay}
                    transform={transform}
                >
                    {children}
                </FadeAndSlideAnimation>
            }
        </ScrollTrigger>
    );
};