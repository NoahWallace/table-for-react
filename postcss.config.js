const postcssPresetEnv =require( 'postcss-preset-env');
module.exports = {
    parser: 'postcss-scss',
    syntax: "postcss-scss",
    //exec:true,
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': postcssPresetEnv({stage:0}),
        'postcss-nested': {},
        'cssnano': {}
    }
}