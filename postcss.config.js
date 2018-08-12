const postcssPresetEnv =require( 'postcss-preset-env');
const precss = require("precss")
const postcssCssNext = require('cssnext')
module.exports = {
    //parser: 'postcss-scss',
   // syntax: "postcss-scss",
    // exec:true,
    plugins: {

        'postcss-import': {},
        'precss':{},
        'postcss-cssnext':{},
       // 'postcss-selector-parser':attrParser(),
        'postcss-preset-env': postcssPresetEnv({stage:0}),

        'postcss-nested': {},
        //'cssnano': {}
    }
}