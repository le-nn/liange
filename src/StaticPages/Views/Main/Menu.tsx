import * as React from "react";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import clover1 from "../../images/clover.jpg";

export const MenuBoard = () => {
    return (
        <Grid container spacing={{ xs: 2, sm: 4, md: 8 }}>
            <Grid item xs={12}>
                <Typography variant="h2" >- MENU</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5">フェイシャルメニュー</Typography>
      
                    <Typography variant="body1">•	Wクレンジングコース 50分 ¥2700</Typography>
                    <Typography variant="body1">•	クレンジング+保湿コース 60分 ¥3200</Typography>
                    <Typography variant="body1">•	保湿ケアーコース 60分 ¥3200</Typography>
                    <Typography variant="body1">•	美白ケアーコース 70分 ¥3700</Typography>
      
            </Grid>

            <Grid item xs={12} sm={6} md={4}  >
                <Typography variant="h5">フェイシャルオプションメニュー</Typography>

                    <Typography variant="body1">•	ショルダーマッサージ 15分 ¥500</Typography>
                    <Typography variant="body1">•	ハンドマッサージ 15分 ¥500</Typography>
                    <Typography variant="body1">•	エイジングケアーコース 80分 ¥4200</Typography>
                    <Typography variant="body1">•	保湿+美白ケアーコース 85分 ¥4700</Typography>
                    <Typography variant="body1">•	スペシャルケアーコース 90分 ¥5200</Typography>
 
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5">光脱毛</Typography>
                <List>
                    <Typography variant="body1">•	1回 ¥10,000</Typography>
                </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5">ボディメニュー</Typography>
              
                    <Typography variant="body1">•	リンパマッサージ 下半身or上半身 60分 ¥3200</Typography>
                    <Typography variant="body1">•	リンパマッサージ 全身ハーフ 60分 ¥3200</Typography>
                    <Typography variant="body1">•	リンパマッサージ 全身 90分 ¥4700</Typography>
                    <Typography variant="body1">• デトックスボディ 下半身or上半身 60分 ¥3800</Typography>
                    <Typography variant="body1">•	デトックスボディ全身ハーフ 60分 ¥3800</Typography>
                    <Typography variant="body1">•	デトックスボディ全身 90分 ¥5600</Typography>
         
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5">ボディオプションメニュー</Typography>
      
                    <Typography variant="body1">•	EMSマッサージ 10分 ¥500</Typography>
                    <Typography variant="body1">•	空気圧マッサージ 10分 ¥500</Typography>
                    <Typography variant="body1">•	フットマッサージ 15分 ¥500</Typography>
                    <Typography variant="body1">• イオン導入 ¥500</Typography>
                    <Typography variant="body1">•	010マッサージ ¥500</Typography>
                    <Typography variant="body1">•	オゾンマッサージ ¥500</Typography>
                    <Typography variant="body1">•	クリオネマッサージ ¥500</Typography>
           
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5">パッケージメニュー</Typography>
              
                    <Typography variant="body1">•	フェイシャル得！得！パッケージ、集中パッケージ</Typography>
                    <Typography variant="body1">
                        •	一日集中ケアーコース
                        リンパマッサージ全身ハーフ + ボディオプション1 90分 ¥4200
                        デトックスマッサージ全身ハーフ + ボディオプション1 90分 ¥4800
                    </Typography>
             
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5">割引</Typography>
            
                    <Typography variant="body1">•	自宅用の化粧品を持参していただくと、500円引き致します。</Typography>
             
            </Grid>

            <Grid item  >
                <img style={{width: "120px"}} src={clover1}/>
            </Grid>

        </Grid >
    );
};
