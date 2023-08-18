import * as React from "react";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img18.jpg";
import img3 from "../../images/img3.jpg";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { SkewScrollTriggerAnimation } from "Components/SkewScrollTriggerAnimation";
import { TransitionImage } from "Components/TransitionImage";

export const Profile = () => {
    return (
        <Grid container spacing={{ xs: 2, sm: 4, md: 8 }}>
            <Grid item xs={12}>
                <Typography variant="h2" >- PROFILE</Typography>
            </Grid>

            <Grid item container xs={12} md={4} spacing={2} >
                <Grid item xs={12} sm={4} md={12} >
                    <TransitionImage className=""
                        parallaxSlideLength={20}
                        src={img3}
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
                        parallaxSlideLength={20}
                        src={img1}
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
                        parallaxSlideLength={20}
                        className=""
                        src={img2}
                        alt="test"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} md={8} >
                <Stack justifyContent="center" height="100%" maxWidth="620px" m="auto">
                    <SkewScrollTriggerAnimation delay={0} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="h5" >店長プロフィール</Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={100} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1" mt={1}>
                            1997年に大手エステサロンTBCに入社。<br />
                            長年の勤務で、フェイシャルやボディケア、<br />
                            光脱毛など幅広い分野の施術を手がけることができるスキルを身につけました。<br /><br />
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={200} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1" >
                            2014年に退社後、
                            自らの夢を叶えるべく2015年に「Liange（リアンジュ）」をオープンしました。<br /><br />
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={300} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1" >
                            お客様一人ひとりに合った施術を提供することをモットーに、<br />
                            安心価格で高品質なエステメニューを展開し、<br />
                            多くのお客様から支持を受けています。<br /><br />
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={400} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1">
                            店長自身が肌の悩みやダイエット経験を持っているため、<br />
                            お客様の気持ちに寄り添いながら施術を行います。<br />
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={500} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1" >
                            また、店長の明るくフレンドリーな人柄が、<br />
                            初めてのお客様でも安心してリラックスできる空間を演出しています。<br />
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={600} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1">
                            エステサロンLiange（リアンジュ）は、<br />
                            心と身体を癒すオアシスを目指しております。<br />
                            ぜひ一度、店長自らが手がける心温まるサロンで、<br />
                            美と癒しのひとときをお過ごしください。お待ちしております！
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={700} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="subtitle2" sx={{ mt: { xs: 2, sm: 3, } }}>
                            1967年9月19日生まれ<br />
                            O型<br />
                            乙女座<br />
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={800} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="subtitle2" >
                            福山市立大門高等学校卒業後色々なお仕事を経験し…<br />
                            1997年TBC入社<br />
                            2015年 Liengeオープン
                        </Typography>
                    </SkewScrollTriggerAnimation>
                </Stack>
            </Grid>

        </Grid >
    );
};
