require ('ignore-styles')
require('react-router-dom')
require('@babel/register')({
    ignore:[/(node_module)/],
    presets:['@babel/preset-env','@babel/preset-react']
})

require('./server')