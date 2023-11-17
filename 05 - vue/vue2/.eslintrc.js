module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    'plugins': [
        'vue'
    ],
    'parserOptions': {
        'parser': '@babel/eslint-parser'
    },
    'rules': {
        'no-alert': 1, // 禁止使用 alert confirm prompt
        'no-const-assign': 2, // 禁止修改 const 声明的变量
        // 'indent': [2, 4, {'SwitchCase': 1}], // 缩进风格
        'vue/script-indent': [2, 4, {'baseIndent': 1, 'switchCase': 1}],
        // 'vue/require-v-for-key': 1, // v-for 时需要 bind key
        // 'vue/no-parsing-error': [2, {'x-invalid-end-tag': false}],
        // 'eqeqeq': 2, // 必须使用全等
        // 'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
        // 'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
        // 'no-empty': 2, // 块语句中的内容不能为空
        // 'no-func-assign': 2, // 禁止重复的函数声明
        // 'no-implicit-coercion': 1, // 禁止隐式转换
        // 'no-invalid-regexp': 2, // 禁止无效的正则表达式
        // 'no-irregular-whitespace': 2, // 不能有不规则的空格
        // 'no-multiple-empty-lines': [1, {'max': 2}], // 空行最多不能超过2行
        // 'no-undef': 1, // 不能有未定义的变量
        // 'no-unreachable': 2, // 禁止在return、throw、continue 和 break语句之后出现不可达代码
        // 'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}], // 禁止出现未使用过的变量
        // 'no-use-before-define': 0, // 不允许在变量定义之前使用它们
        // 'no-var': 2, // 禁用var，用let和const代替
        'semi': [2, 'always'], // 语句强制分号结尾
        // 'camelcase': 1,
        // 'no-duplicate-case': 2, // 禁止出现重复的 case 标签
        // 'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
        // 'no-redeclare': 2, // 禁止多次声明同一变量
        // 'no-useless-escape': 2, // 禁用不必要的转义字符
        // 'no-useless-return': 2, // 禁止多余的 return 语句
        // 'wrap-iife': [2, 'inside'], // 要求 IIFE 使用括号括起来(默认括号在最外层全包)
        // 'array-bracket-spacing': 2, // 强制数组方括号中使用一致的空格(默认左右不能出现空格)
        // 'brace-style': 2, // 强制在代码块中使用一致的大括号风格
        // 'comma-dangle': 2, // 要求或禁止使用末尾逗号(默认禁用)
        // 'comma-spacing': 2, // 强制在逗号前后使用一致的空格
        // 'comma-style': 2, // 强制使用一致的逗号风格
        // 'computed-property-spacing': 2, // 强制在计算的属性的方括号中使用一致的空格(默认不使用空格)
        // 'func-call-spacing': 2, // 要求或禁止在函数标识符和其调用之间有空格(默认不使用空格)
        // 'function-paren-newline': 2, // 强制在函数括号内使用一致的换行
        // 'key-spacing': 2, // 强制在对象字面量的属性中键和值之间使用一致的间距
        // 'keyword-spacing': 2, // 强制在关键字前后使用一致的空格
        // 'space-before-blocks': 2, // 要求或禁止语句块之前的空格(默认使用空格)
        // 'space-before-function-paren': [2, {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}], // 强制在 function 的左括号之前使用一致的空格(默认使用空格)
        // 'space-infix-ops': 2, // 要求操作符周围有空格
        // 'spaced-comment': 2, // 强制在注释中 // 或 /* 使用一致的空格(默认使用)
        // 'switch-colon-spacing': 2, // 强制在 switch 的冒号左右有空格(默认冒号右边有空格, 左边没有)
        // 'arrow-spacing': 2, // 强制箭头函数的箭头前后使用一致的空格(默认有空格)
        // 'prefer-template': 2, // 建议使用模板字面量而非字符串连接
        // 'quotes': [2, 'single'], // 强制使用一致的反勾号、双引号或单引号(要求尽可能地使用单引号)
        // 'handle-callback-err': 1,
        // 'no-multi-spaces': 2 // 禁止出现多个空格
    },
    'overrides': [
        {
            'files': ['*.vue'],
            'rules': {
                'indent': 'off'
            }
        }
    ]
};
