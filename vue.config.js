const px2rem = require('postcss-px2rem');

const postcss = px2rem({
    remUnit: 32   //基准大小 baseSize
});

module.exports = {
    //publicPath: './',//打包时需要更改路径./static
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    }
};
