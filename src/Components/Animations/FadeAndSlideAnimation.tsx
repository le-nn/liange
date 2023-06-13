import { css } from "@emotion/react";
import { Box } from "@mui/system";
import { ScrollTriggerTransition, Transition, TransitionProps } from "mui-extensions/src/ScrollTrigger";
import React, { ReactNode } from "react";

interface FadeAndSlideAnimationProps extends TransitionProps {
    transform?: {
        translate?: {
            x?: string;
            y?: string;
        }
        rotate?: string;
        scale?: number;
        // eslint-disable-next-line @typescript-eslint/ban-types
        transformOrigin?: "bottom" | "center" | "left" | "right" | "top" | (string & {});
    }
}

export const FadeAndSlideAnimation = (props: FadeAndSlideAnimationProps) => {
    const { transform } = props;
    return <Transition
        in={props.in}
        delay={props.delay}
    >
        {state =>
            <Box
                className={props.className}
                style={props.style}
                css={[
                    css({
                        transformOrigin: transform?.transformOrigin,
                        transform: `translate(${transform?.translate?.x ?? "-10px"},${transform?.translate?.y ?? "20px"}) rotate(${transform?.rotate ?? "-3deg"}) scale(${transform?.scale ?? 0.94})`,
                        opacity: 0,
                        transition: `all ${parse(props.delay) ?? 1200}ms cubic-bezier(0.24, 0.26, 0, 0.64)`
                    }),
                    state === "entered" ? css({
                        transform: "translate(0px,0px) rotate(0) scale(1)",
                        opacity: 1,
                    }) : undefined
                ]}
            >
                {props.children}
            </Box>}
    </Transition>;
};

const parse = (delay?: number | {
    appear?: number | undefined;
    enter?: number | undefined;
    exit?: number | undefined
}) => {
    if (typeof delay === "object") {
        return delay?.appear;
    }

    return undefined;
};