import { css } from "@emotion/react";
import { Box, CSSProperties } from "@mui/system";
import { Transition, TransitionProps } from "mui-extensions/src/ScrollTrigger";
import React, { ReactNode, useEffect, useRef, useState } from "react";

type AnimationProps = TransitionProps;
interface SkewAnimationProp extends AnimationProps {
    bgcolor?: string;
    speed?: number;
}

export const SkewAnimation = (props: SkewAnimationProp) => {
    const [el, setEl] = useState<HTMLElement | null>(null);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const width = el?.getBoundingClientRect().width;
        if (width) {
            // width / 100px
            const w = width / 100;
            const t = Math.floor(300 * w * (props.speed ?? 1));
            if (t !== time) {
                setTime(t);
            }
        }
    }, [el, time, props.speed]);

    return <Transition
        {...props}
    >
        {state => <Box
            style={props.style}
            className={props.className}
            css={css`
                position: relative;
                width: fit-content;
                margin: 0 auto;
            `}
            ref={el => {
                if (el) {
                    setEl(el as any);
                }
            }}
        >
            <Box
                style={{
                    transition: `transform ${time}ms cubic-bezier(0.4, 0.41, 0.1, 0.65)`
                }}
                css={[
                    style,
                    css({
                        background: props.bgcolor ?? "white",
                    }),
                    state === "entered" ? show : undefined
                ]}
            />
            {props.children}
        </Box>
        }
    </Transition >;
};

const show = css`
    transform: scaleX(0) skewX(-10deg);
`;

const style = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scaleX(1.25) translateX(12%) skewX(-30deg);
    transform-origin: right;
`;