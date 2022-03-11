import React, { useState } from "react";
import { css } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";

const box = css({
    padding: "12px",
});

export default () => {
    return (
        <div css={box}>
            <Box p={2}>
                <Typography variant="h5">Counter!</Typography>
            </Box>
            <Counter />
        </div>
    );
};

const Counter = () => {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount(count - 1);
    };

    return (
        <Box>
            <Box
                p={2}
                sx={{
                    display: "flex",
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={countDown}>Count Down</Button>

                <Button
                    sx={{ marginLeft: "12px" }}
                    onClick={countUp}
                    variant="contained"
                    color="primary"
                >Count Up</Button>
            </Box>
            <Box
                p={2}
                sx={{ display: "flex", }}
            >
                <Typography>Present Count: {count}</Typography>
            </Box>
        </Box>
    );
};