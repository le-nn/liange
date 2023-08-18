/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// SPAでクライアントサイドでルーティングする場合はこちらにパスを追加
const clientRoutes = ["/app/*"];

module.exports = {
    // pathPrefix: `/path`, github pagesなどを利用する場合はこちらにルートパスを指定
    siteMetadata: {
        title: "Liange 尾道",
        siteUrl: `https://liange-onomichi.com`,
    },
    plugins: [
        // SEO
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
                sourceMap: true,
                autoLabel: "dev-only",
                labelFormat: `[local]`,
                cssPropOptimization: true,
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "GA-TRACKING_ID", // Google Analytics / GA
                "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              gtagConfig: {
                optimize_id: "OPT_CONTAINER_ID",
                anonymize_ip: true,
                cookie_expires: 0,
              },
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
              },
            },
          },
        // PWA
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `React Template`,
                short_name: `React Template`,
                description: `React starter template for SPA.`,
                start_url: `/app`,
                background_color: `#ffffff`,
                theme_color: `#0ba7bf`,
                display: `standalone`,
                icon: `static/icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        // Build
        `gatsby-plugin-webpack-bundle-analyser-v2`,
        `gatsby-plugin-resolve-src`,
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                stages: ["develop"],
                extensions: ["js", "jsx", "ts", "tsx"],
                exclude: ["node_modules", ".cache", "public"],
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-create-client-paths`,
            options: { prefixes: [...clientRoutes] },
        },
        // Material UI
        `gatsby-plugin-material-ui`,
        // Images
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    quality: 50,
                    breakpoints: [600, 900, 1200, 1536],
                    backgroundColor: `transparent`,
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images/`,
            },
        },
        // Page resolve
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/StaticPages/Endpoints`,
            },
        },
    ],
};
