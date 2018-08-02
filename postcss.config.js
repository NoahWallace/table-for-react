module.exports = {
    parser: 'postcss-scss',
    syntax: "postcss-scss",
    //exec:true,
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': false,
        'postcss-nested': {},
        'cssnano': {}
    }
}