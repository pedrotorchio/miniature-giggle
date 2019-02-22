const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const BlockAllRequestsRenderer = require('frame-spa-prerenderer')

module.exports = {
    
    chainWebpack: config => {
        config.plugins.delete('preload')
        config
            .plugin('html')
            .tap(args => {
                args[0].minify = true
                return args
        })
    },
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                // Required - The path to the webpack-outputted app to prerender.
                staticDir: path.join(__dirname, 'dist'),
                // Required - Routes to render.
                routes: [ '/' ],
                minify: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: false,
                    decodeEntities: true,
                    keepClosingSlash: true,
                    sortAttributes: true
                },
                renderer: new BlockAllRequestsRenderer({
                    acceptExceptions: [
                        /\/js\/app(.*).js/,
                        /\/js\/chunk-vendors(.*).js/
                    ]
                })
            })
        ]
    }
}