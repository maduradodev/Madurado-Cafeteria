
const { resolve } = require('path');

export default {
    // config options
    root: './src',
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
            }
        },
        outDir: '../dist'
    },
}
