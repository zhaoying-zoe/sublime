## 1. js数据类型？
# number, string, boolean, undefined, null, object(object, array), symbol, bigInt

# symbol: 独一无二且不可修改   >>>>   用处: 防止全局变量的冲突，对象数据的覆盖
# bigInt: 表示位数超多的正整数   >>>>   用处: 大数据量的计算(位数超多的数据计算)

# 2. 基本数据类型的区分？
## 可以区分为：原始数据类型和引用数据类型
## 原始数据类型: undefined, null, number, string
## 引用数据类型: object, array, function, 

# 2.1 效果不同
## 原始数据类型不存在引用关系
## 引用数据类型存在引用关系
# 2.2 存储位置不同
## 原始数据类型储存在栈内存中 > 空间小，大小固定，操作频繁
## 引用数据类型储存在堆内存中 > 引用类型数据量大，大小不固定，赋值时给的是引用地址
# 3. 对类型进行判断
## 3.1 typeof 
```js
    typeof 222 // number
    typeof '222' // string
    typeof true // boolean
    typeof undefined // string
    typeof null // object
    typeof [] // object
    typeof {} // object
```
## 3.2 instanceof    (返回值是个Boolean,主要用来检测引用类型的,原始数据类型检测不到,无法判断函数是object还是function)
```js
    222 instanceof Number // false
    '222' instanceof String // false
    [] instanceof Array // true
    ({}) instanceof Object // true
    console.log(function(){} instanceof Object);//true
    console.log(function(){} instanceof Function);//true
```

# 3.3 instanceof的原理实现：
通过'户口本'(原型链)查家庭信息



