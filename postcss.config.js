module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-import'),
        require('precss'),
        require('postcss-hexrgba'),
        require('postcss-preset-env')({
            stage: 1,
        })
    ]
}