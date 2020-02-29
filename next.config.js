const withCss = require('@zeit/next-css')

// 固定的配置写法
if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => {}
}

module.exports = withCss({})

