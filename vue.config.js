const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const BlockAllRequestsRenderer = require('frame-spa-prerenderer')
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let configureWebpack = {
    plugins: []
}

if (process.env.NODE_ENV === 'production') {
    // chainWebpack: config => {
    //     config.plugins.delete('preload')
    //     config
    //         .plugin('html')
    //         .tap(args => {
    //             args[0].minify = true
    //             return args
    //     })
    // },
    configureWebpack.optimization = {
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 0,
          cacheGroups: {
            vendorInitial: {
                chunks: 'all',
                test: module => {

                    const matches = [
                        "vue",
                        "normalize.css",
                        "gsap"
                    ]
                    .map(modName => new RegExp("\/node_modules\/" + modName + "(.*)") ) // turns into node_modules/moduleName regex
                    .some(regex => module.context.match(regex)) // tests

                    if (matches)
                        console.log(module.context)
                    return matches
                    
                },
                name: 'initial-vendors'
            },
          }
        }
    };
    configureWebpack.plugins.push(
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
            renderer: new PuppeteerRenderer()
        })
    );
    configureWebpack.plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            openAnalyzer: false,
            generateStatsFile: true,
            statsFilename: path.resolve('./dist/bundle-stats.json'),
            statsOptions: { source: false }
        })
    );

} else {

}


module.exports = {
    configureWebpack
}