import * as React from "react";

import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import img8 from "../../images/img8.jpg";
import img9 from "../../images/img9.jpg";
import img10 from "../../images/img10.jpg";
import img11 from "../../images/img11.jpg";

import { Box, Grid, Typography } from "@mui/material";
import { TransitionImage } from "Components/TransitionImage";
import { SkewScrollTriggerAnimation } from "Components/SkewScrollTriggerAnimation";

export const Explain = () => {
    return (
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} >
            <Grid item xs={12}>
                <Typography variant="h2" >- 光脱毛</Typography>
            </Grid>

            <Grid item container xs={12} md={5} spacing={1} >
                <Grid item xs={12} sm={4} md={12} >
                    <TransitionImage className=""
                        src={img6}
                        parallaxSlideLength={25}
                        alt="test"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </Grid>

                <Grid item xs={6} sm={4} md={4}>
                    <TransitionImage
                        className=""
                        src={img9}
                        parallaxSlideLength={25}
                        alt="test"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <TransitionImage
                        className=""
                        src={img10}
                        parallaxSlideLength={25}
                        alt="test"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <TransitionImage
                        className=""
                        parallaxSlideLength={25}
                        src={img11}
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
                        src={img7}
                        alt="test"
                        parallaxSlideLength={25}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <TransitionImage
                        className=""
                        parallaxSlideLength={25}
                        src={img8}
                        alt="test"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </Grid>

            </Grid>

            <Grid item xs={12} md={7}>
                <Box>

                    <SkewScrollTriggerAnimation delay={0} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1">
                            光脱毛は、最新の脱毛技術を用いた美容施術で、<br />
                            お肌に優しく、効果的にムダ毛を処理する方法です。<br />
                            エステサロン Liange（リアンジュ）では、一般的な光脱毛メニューを提供しております。
                        </Typography>
                    </SkewScrollTriggerAnimation>

                </Box>

                <Box mt={{ xs: 2, sm: 3, md: 4 }}>

                    <SkewScrollTriggerAnimation delay={100} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="subtitle1">
                            光脱毛の特徴
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={200} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1" sx={{ mt: { xs: 1, sm: 2, } }}>
                            •	痛みが少ない：光脱毛は、肌への負担が少なく、痛みを感じにくい方法です。<br />
                            •	短期間で効果が現れる：光脱毛は、数回の施術でムダ毛の減少が実感できることが一般的です。<br />
                            •	肌トラブルが少ない：光脱毛は、肌へのダメージが少なく、肌トラブルが起こりにくいとされています。<br />
                            •	美肌効果：光脱毛は、毛穴を引き締める効果があり、美肌に導きます。<br />
                        </Typography>
                    </SkewScrollTriggerAnimation>

                </Box>

                <Box mt={{ xs: 2, sm: 3, md: 4 }}>

                    <SkewScrollTriggerAnimation delay={300} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="subtitle1">
                            カウンセリング
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={400} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1" sx={{ mt: { xs: 1, sm: 2, } }}>
                            初めて光脱毛を受けられる方は、事前のカウンセリングが必要です。<br />
                            カウンセリングでは、お客様の肌質や毛質を確認し、<br />
                            適切な施術プランをご提案いたします。<br />
                        </Typography>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation delay={400} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1" sx={{ mt: { xs: 1, sm: 2, } }}>
                            また、施術に関する注意事項やアフターケアについても詳しく説明いたします。<br />
                            施術回数や期間は個人差がありますので、カウンセリングでご相談ください。
                        </Typography>
                    </SkewScrollTriggerAnimation>

                </Box>

            </Grid>
        </Grid >
    );
};
