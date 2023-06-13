import * as React from "react";

import { TransitionImage } from "Components/TransitionImage";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { FadeAndSlideScrollTriggerAnimation } from "Components/FadeAndSlideScriollTriggerAnimation";

import door from "../../images/door.jpg";
import img13 from "../../images/img13.jpg";
import img16 from "../../images/img16.jpg";
import img17 from "../../images/img17.jpg";
import img19 from "../../images/img19.jpg";
import clover1 from "../../images/clover1.png";

export const Access = () => {

    return (
        <Box>
            <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }} >
                <FadeAndSlideScrollTriggerAnimation>
                    <Typography variant="h2" >- ACCESS</Typography>
                </FadeAndSlideScrollTriggerAnimation>
            </Box>

            <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }} >
                <TransitionImage src={img16}
                    parallaxSlideLength={20}
                    alt="入口"
                    style={{ objectFit: "cover" }} />
            </Box>

            <Grid container spacing={2} sx={{ mt: { xs: 2, sm: 3, md: 4 } }} >
                <Grid item xs={12} md={6} >
                    <Typography variant="h4">店舗情報</Typography>
                    <Stack spacing={2} sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
                        <Typography variant="h5">営業日 / 月曜日～土曜日</Typography>
                        <Typography variant="h5">休日 / 日曜日・祝日</Typography>
                        <Typography variant="h5">営業時間 / 09:00～19:00</Typography>
                        <Typography variant="h5">電話番号 / <a href="tel:08082447899">080 - 8244 - 7899</a></Typography>
                        <Typography variant="h5">Email / <a href="tel:">aaa@aaa.com</a></Typography>
                        <Typography variant="h5">〒722-0018</Typography>
                        <Typography variant="h5">
                            広島県尾道市平原 3-21-15<br />
                            グランシャリオ平原301号室
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item container xs={12} md={6} spacing={2}>
                    <Grid item xs={12} sm={4} md={12} >
                        <TransitionImage className=""
                            parallaxSlideLength={0}
                            src={img13}
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
                            parallaxSlideLength={0}
                            src={img17}
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
                            parallaxSlideLength={0}
                            className=""
                            src={door}
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

            <Box sx={{ mt: { xs: 2, sm: 4, md: 7} }} >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.4909912322055!2d133.17409245108826!3d34.414281480413294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3551002af6fa2997%3A0xacc7f39cc95c5178!2z44CSNzIyLTAwMTgg5bqD5bO255yM5bC-6YGT5biC5bmz5Y6f77yT5LiB55uu77yS77yR4oiS77yR77yVIOOCsOODqeODs-OCt-ODo-ODquOCquW5s-WOnyAzMDE!5e0!3m2!1sja!2sjp!4v1614094794108!5m2!1sja!2sjp"
                    style={{ border: "0", width: "100%", height: "460px" }}
                    allowFullScreen={undefined}
                    loading="lazy"
                />
            </Box>

            <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }} width="100%" display="flex" justifyContent="center">
                <img style={{ width: "360px", height: "auto", filter: "grayscale(0.5)" }} src={clover1} />
            </Box>
        </Box >
    );
};