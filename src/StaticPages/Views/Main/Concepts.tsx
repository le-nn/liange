import * as React from "react";

import window from "../../images/window.jpg";
import nature from "../../images/nature.jpg";
import room2 from "../../images/room2.jpg";
import { Box, Grid, Typography } from "@mui/material";
import { FadeAndSlideAnimation } from "Components/Animations/FadeAndSlideAnimation";
import { FadeAndSlideScrollTriggerAnimation } from "Components/FadeAndSlideScriollTriggerAnimation";
import { TransitionImage } from "Components/TransitionImage";

export const ConceptsPanel = () => {
    return (
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            <Grid item xs={12} md={6} spacing={2}>
                <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }} >
                    <FadeAndSlideScrollTriggerAnimation>
                        <Typography variant="h2" >- CONCEPT</Typography>
                    </FadeAndSlideScrollTriggerAnimation>
                </Box>

                <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
                    <FadeAndSlideScrollTriggerAnimation>
                        <Typography variant="h5" >
                            美しくありたいと願う女性の<br />
                            心とカラダを癒す<br />
                            オアシスでありたい<br />
                        </Typography>
                    </FadeAndSlideScrollTriggerAnimation>
                </Box>

                <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
                    <FadeAndSlideScrollTriggerAnimation >
                        <Typography variant="body1" >
                            私たちが目指す「美しさ」は表面的なものではありません。<br />
                            美容鍼や全身調整を通じて、カラダの内側から美しさを引き出すことで、<br />
                            日々の暮らしをより輝かせることが私たちの使命です。
                        </Typography>
                    </FadeAndSlideScrollTriggerAnimation>
                </Box>

            </Grid>

            <Grid item xs={12} md={6} >
                <Grid container spacing={{ xs: 1, sm: 2 }} >
                    <Grid item xs={12} sm={4} md={12} >
                        <TransitionImage className=""
                            src={room2}
                            alt="test"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} sm={4} md={6} >
                        <TransitionImage className=""
                            src={nature}
                            alt="test"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} sm={4} md={6}>
                        <TransitionImage
                            className=""
                            src={window}
                            alt="test"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
};
