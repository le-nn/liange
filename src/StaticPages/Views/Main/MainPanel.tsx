import * as React from "react";

import clover from "../../images/clover.jpg";
import bed1 from "../../images/bed1.jpg";
import onomichi from "../../images/onomichi.jpg";
import liangePanel from "../../images/liange_panel.jpg";
import img5 from "../../images/img5.jpg";
import img11 from "../../images/img11.jpg";
import { Box, Grid, IconButton, Stack, SvgIcon, Typography } from "@mui/material";
import { mdiInstagram, mdiFacebook, mdiEmail } from '@mdi/js';
import { TransitionImage } from "Components/TransitionImage";
import { SkewScrollTriggerAnimation } from "Components/SkewScrollTriggerAnimation";

export const MainPanel = () => {
    return (
        <Grid container style={{ minHeight: "calc(100vh - 40px)" }}>

            {/* Content */}
            <Grid item xs={11}>

                <Stack height="100%" justifyContent="space-around">
                    {/* description */}
                    <Stack direction="row" alignItems="center" sx={{ mt: { xs: 2, sm: 8, md: 12 }, ml: { xs: 1, sm: 12, md: 18 } }}>
                        <Box >
                            <Typography variant="h2" sx={{
                                ml: { xs: 2, sm: 3, md: 6 },
                                userSelect: "none",
                                fontWeight: "500!important",
                                fontSize: "0.8rem!important",
                                fontFamily: "'Dancing Script' !important",
                            }}>女性専用エステティックサロン</Typography>
                            <Typography variant="h1" sx={{
                                ml: { xs: 2, sm: 3, md: 6 },
                                userSelect: "none",
                                fontWeight: "500!important",
                                fontFamily: "'Dancing Script' !important",
                            }} >Liange</Typography>
                        </Box>

                        <img style={{
                            height: "80px",
                            width: "80px",
                            filter: "hue-rotate(27deg) grayscale(0.28)"
                        }} src={clover} />
                    </Stack >

                    <Stack sx={{ mt: { xs: 1, sm: 2, md: 3 } }} direction="row">
                        <Box ml={{ xs: 1, sm: 3, md: 6 }}>
                            <Typography variant="body1" style={{
                                writingMode: "vertical-rl",
                                width: "24px",
                                borderLeft: "2px solid currentColor",
                            }}>
                                RELAXATION.
                            </Typography>
                        </Box>

                        <Box ml={{ xs: 0, sm: 8, md: 12, lg: 24, xl: 32 }} mt={{ xs: 8, md: 1 }} px={{ xs: 2, sm: 3 }}>
                            <Box style={{ maxWidth: "680px", width: "100%" }}>
                                <SkewScrollTriggerAnimation delay={2000} style={{ margin: "0" }}>
                                    <Typography variant="h6" component="h2" sx={{fontSize: "1.1rem"}}>エステティックサロン</Typography>
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation delay={2000} style={{ margin: "0" }}>
                                    <Typography variant="h4" component="h2" py={1} >Liange　- リアンジュ -</Typography>
                                </SkewScrollTriggerAnimation>
                            </Box>

                            <Box sx={{ mt: { xs: 3, sm: 4, md: 6 } }} style={{ maxWidth: "680px", width: "100%" }}>
                                <SkewScrollTriggerAnimation delay={2100} style={{ width: "100%" }}>
                                    <Typography variant="body2">
                                        17年間、大手エステサロンでの経験と実績を持ち合わせたスタッフが、<br />
                                        リーズナブルな価格でメニューを提供するエステサロンです。<br />
                                    </Typography>
                                </SkewScrollTriggerAnimation>
                            </Box>

                            <Box sx={{ mt: { xs: 1, md: 2 } }} style={{ maxWidth: "680px", width: "100%" }}>
                                <SkewScrollTriggerAnimation delay={2200} style={{ width: "100%" }}>
                                    <Typography variant="body2">
                                        エステが高いと諦めていた方、<br />
                                        日頃の疲れを癒したい方、<br />
                                        綺麗になりたい方に寄り添ったコースを提供いたします。<br />
                                    </Typography>
                                </SkewScrollTriggerAnimation>
                            </Box>

                            <Box sx={{ mt: { xs: 1, md: 2 } }} style={{ maxWidth: "680px", width: "100%" }}>
                                <SkewScrollTriggerAnimation delay={2300} style={{ width: "100%" }}>
                                    <Typography variant="body2">
                                        アットホームな空間でリラックスしながら、美と健康を追求できるサロンです。<br />
                                        ぜひ一度、ご来店ください。
                                    </Typography>
                                </SkewScrollTriggerAnimation>
                            </Box>
                        </Box>
                    </Stack>

                    {/* images */}
                    <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="center" mt={{ xs: 8, md: 0 }} >
                        <Box className="img-btn-container" sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
                            <TransitionImage
                                className="img-btn"
                                src={onomichi}
                                alt="尾道"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "fill"
                                }}
                            />
                        </Box>
                        <Box className="img-btn-container" sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
                            <TransitionImage
                                className="img-btn"
                                src={img5}
                                alt="エステ"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "fill"
                                }}
                            />
                        </Box>
                        <Box className="img-btn-container" sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
                            <TransitionImage
                                className="img-btn"
                                src={bed1}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "fill"
                                }}
                                alt="ベッド"
                            />
                        </Box>
                        <Box className="img-btn-container" sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
                            <TransitionImage
                                className="img-btn"
                                src={liangePanel}
                                alt="リアンジュ看板"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "fill"
                                }}
                            />
                        </Box>
                        <Box className="img-btn-container" sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
                            <TransitionImage
                                className="img-btn"
                                src={img11}
                                alt="flower"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "fill"
                                }}

                            />
                        </Box>
                    </Stack>
                </Stack>

            </Grid>

            {/* Vertical Line */}
            <Grid item xs={1} style={{ height: "calc(100vh - 40px)" }} py={{ xs: 2, md: 4 }}>
                <Stack alignItems="start"  sx={{height: "100%"}} style={{ borderLeft: "2px solid currentColor" }}>
                    <Typography variant="h6" ml={1} my="auto" style={{ writingMode: "vertical-rl", width: "24px" }} >Liange ONOMICHI.</Typography>

                    <IconButton >
                        <SvgIcon   ><path d={mdiEmail} /> </SvgIcon>
                    </IconButton>

                    <IconButton >
                        <SvgIcon   ><path d={mdiInstagram} /> </SvgIcon>
                    </IconButton>

                    <IconButton >
                        <SvgIcon   ><path d={mdiFacebook} /> </SvgIcon>
                    </IconButton>
                </Stack>
            </Grid>
        </Grid >
    );
};
