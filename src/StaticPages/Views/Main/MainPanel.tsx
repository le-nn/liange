import * as React from "react";

import clover from "../../images/clover.jpg";
import bed1 from "../../images/bed1.jpg";
import onomichi from "../../images/onomichi.jpg";
import liangePanel from "../../images/liange_panel.jpg";
import img5 from "../../images/img5.jpg";
import img11 from "../../images/img11.jpg";
import { Box, Typography } from "@mui/material";
import { mdiInstagram, mdiFacebook, mdiEmail } from '@mdi/js';
import { TransitionImage } from "Components/TransitionImage";
import { SkewScrollTriggerAnimation } from "Components/SkewScrollTriggerAnimation";

export const MainPanel = () => {
    return (
        <article className="container">
            <section
                className="row"
                style={{ minHeight: "calc(100vh - 112px)" }}
            >
                {/* Content */}
                <section className="column col-11">
                    <section className="row" style={{ height: "100%" }}>
                        {/* description */}
                        <section className="col-12 col-sm-12 d-flex flex-column">
                            <Box className="row align-center px-2" sx={{ mt: { xs: 0, sm: 4, md: 8 } }}>
                                <div className="column" />
                                <Box className="column col-4 col-sm-8 d-flex flex-column">
                                    <Typography variant="h2" sx={{ ml: { xs: 2, sm: 3, md: 6 }, }} className="font-logo2 font-weight-500">女性専用エステティックサロン</Typography>
                                    <Typography variant="h1" sx={{ ml: { xs: 2, sm: 3, md: 6 } }} className="font-logo z-index-1">Liange</Typography>
                                </Box>

                                <div className="column col-4 col-sm-4">
                                    <img style={{
                                        height: "80px",
                                        width: "80px",
                                        filter: "hue-rotate(27deg) grayscale(0.28)"
                                    }} src={clover} />
                                </div>
                            </Box>
                            <Box className="row fill-height align-center" sx={{ mt: { xs: 1, sm: 2, md: 3 } }}>
                                <div className="column col-2 col-sm-1">
                                    <h5 className="left-message" style={{
                                        writingMode: "vertical-rl",
                                        width: "24px",
                                        borderLeft: "2px solid currentColor",
                                    }}>RELAXATION.</h5>
                                </div>

                                <Box className="column col-10 col-sm-11" sx={{ p: { xs: 2, sm: 3, md: 6 } }}>
                                    <Box sx={{ mt: { xs: 3, sm: 4, md: 6 } }} style={{ maxWidth: "680px", width: "100%" }}>
                                        <SkewScrollTriggerAnimation delay={2000} style={{ margin: "0" }}>
                                            <Typography variant="h2" className="font-sm font-weight-500">エステティックサロン</Typography>
                                        </SkewScrollTriggerAnimation>

                                        <SkewScrollTriggerAnimation delay={2000} style={{ margin: "0" }}>
                                            <Typography variant="h2" className="font-lg font-weight-500" >Liange　- リアンジュ -</Typography>
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
                            </Box>
                        </section>
                        {/* images */}
                        <section className="row align-center justify-center top-photo-box" >
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
                        </section>
                    </section>
                </section>
                {/* Vertical Line */}
                <section className="column col-1" style={{ height: "calc(100vh - 112px)" }}>
                    <section className="fill d-flex flex-column justify-center align-start" style={{ borderLeft: "2px solid currentColor" }}>
                        <div className="flex-grow-1" />
                        <h6 className="ma-0" style={{ writingMode: "vertical-rl", width: "24px" }}>Liange ONOMICHI.</h6>
                        <div className="flex-grow-1" />

                        <button className="icon-btn xs">
                            <span className="icon">
                                <svg viewBox="0 0 24 24"><path d={mdiInstagram} /></svg>
                            </span>
                        </button>
                        <button className="icon-btn xs">
                            <span className="icon">
                                <svg viewBox="0 0 24 24"><path d={mdiFacebook} /></svg>
                            </span>
                        </button>
                        <button className="icon-btn xs">
                            <span className="icon">
                                <svg viewBox="0 0 24 24"><path d={mdiEmail} /></svg>
                            </span>
                        </button>
                    </section>
                </section>
            </section>
        </article >
    );
};
