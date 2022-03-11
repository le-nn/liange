import React from "react";
import { css } from "@emotion/react";

const text = css`
    color: #0dc4ce;
`;

const box = css({
    padding: "12px",
});

export default () => {
    return (
        <div css={box}>
            <div css={box}>
                <h2 css={text}>This is Lazy test page !</h2>
            </div >
            <div css={box}>
                <p>
                    This is Lazy loaded page with dynamic import !
                    Since the bundle is divided for each Routing, it will be loaded at fast.
                </p>
            </div>
        </div>
    );
};
