module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    "plugins": [
        "vue"
    ],
    "parserOptions": {
        "parser": "@babel/eslint-parser"
    },
    "rules": {
        "no-alert": 1, // 禁用 alert
        "no-const-assign": 2, // 禁止修改 const 定义的变量
        "no-var": 2, // 禁用 var ,用 let/const 代替
        // "indent": [2, 4], // 缩进风格
    }
}
