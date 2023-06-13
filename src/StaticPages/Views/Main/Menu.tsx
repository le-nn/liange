import * as React from "react";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import clover1 from "../../images/clover.jpg";

export const MenuBoard = () => {
    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Typography variant="h2" >- MENU</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5">フェイシャルメニュー</Typography>
                <List>
                    <ListItem>•	Wクレンジングコース 50分 ¥2700</ListItem>
                    <ListItem>•	クレンジング+保湿コース 60分 ¥3200</ListItem>
                    <ListItem>•	保湿ケアーコース 60分 ¥3200</ListItem>
                    <ListItem>•	美白ケアーコース 70分 ¥3700</ListItem>
                </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4}  >
                <Typography variant="h5">フェイシャルオプションメニュー</Typography>
                <List>
                    <ListItem>•	ショルダーマッサージ 15分 ¥500</ListItem>
                    <ListItem>•	ハンドマッサージ 15分 ¥500</ListItem>
                    <ListItem>•	エイジングケアーコース 80分 ¥4200</ListItem>
                    <ListItem>•	保湿+美白ケアーコース 85分 ¥4700</ListItem>
                    <ListItem>•	スペシャルケアーコース 90分 ¥5200</ListItem>
                </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5">光脱毛</Typography>
                <List>
                    <ListItem>•	1回 ¥10,000</ListItem>
                </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5">ボディメニュー</Typography>
                <List>
                    <ListItem>•	リンパマッサージ 下半身or上半身 60分 ¥3200</ListItem>
                    <ListItem>•	リンパマッサージ 全身ハーフ 60分 ¥3200</ListItem>
                    <ListItem>•	リンパマッサージ 全身 90分 ¥4700</ListItem>
                    <ListItem>• デトックスボディ 下半身or上半身 60分 ¥3800</ListItem>
                    <ListItem>•	デトックスボディ全身ハーフ 60分 ¥3800</ListItem>
                    <ListItem>•	デトックスボディ全身 90分 ¥5600</ListItem>
                </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5">ボディオプションメニュー</Typography>
                <List>
                    <ListItem>•	EMSマッサージ 10分 ¥500</ListItem>
                    <ListItem>•	空気圧マッサージ 10分 ¥500</ListItem>
                    <ListItem>•	フットマッサージ 15分 ¥500</ListItem>
                    <ListItem>• イオン導入 ¥500</ListItem>
                    <ListItem>•	010マッサージ ¥500</ListItem>
                    <ListItem>•	オゾンマッサージ ¥500</ListItem>
                    <ListItem>•	クリオネマッサージ ¥500</ListItem>
                </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5">パッケージメニュー</Typography>
                <List>
                    <ListItem>•	フェイシャル得！得！パッケージ、集中パッケージ</ListItem>
                    <ListItem>
                        •	一日集中ケアーコース
                        リンパマッサージ全身ハーフ + ボディオプション1 90分 ¥4200
                        デトックスマッサージ全身ハーフ + ボディオプション1 90分 ¥4800
                    </ListItem>
                </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5">割引</Typography>
                <List>
                    <ListItem>•	自宅用の化粧品を持参していただくと、500円引き致します。</ListItem>
                </List>
            </Grid>

            <Grid item  >
                <img style={{width: "120px"}} src={clover1}/>
            </Grid>

        </Grid >
    );
};
