<template>
  <div class="hello">
    <div>{{ msg }}</div>
    <div>computed 无法传参: {{ computMsg }}</div>
    <div>watch 的使用: 
      <div>
        {{ valueData }}
        <button @click="chageValue">修改普通值</button>
      </div>
      <div>
        {{ valueObj }}
        <button @click="chageValueObj">修改对象值</button>
      </div>
      <div>
        {{ valueArr }}
        <button @click="chageValueArr">修改数组值</button>
      </div>
    </div>

    <!-- 插槽的使用 -->
    <div>插槽的使用 --------------------------------------------------------------- 插槽的使用</div>
    <useSlot>
      <!-- <p>父组件匿名插槽</p>
      <p>父组件匿名插槽</p>
      <p>父组件匿名插槽</p>
      <p>父组件匿名插槽</p>
      <p>父组件匿名插槽</p> -->

      <!-- <slot name="header">
        父组件具名插槽header
      </slot> -->

      <!-- 匿名作用域插槽 -->
      <template v-slot:default="slotProps">
        子组件传递的数据: {{ slotProps }}
      </template>
      <!-- 具名作用域插槽 -->
      <template v-slot:age="slotProps">
        子组件传递的数据: {{ slotProps }}
      </template>
    </useSlot>

    <!-- 过滤器的使用 -->
    <div>
      过滤器的使用：
      <div>金钱：{{ 100 | filterMoney }}</div>
      <div>时间过滤：{{ 1697035483418 | filterTime }}</div>
    </div>
  </div>
</template>

<script>
    import useSlot from './useSlot.vue';

    export default {
        name: 'HelloWorld',
        components: {
            useSlot
        },
        data() {
            return {
                valueData: 'use valueData',
                valueObj: {
                    name: 'tom'
                },
                valueArr: [1, 2, 3, {name: 'tom'}]
            };
        },
        props: {
            msg: String
        },
        methods: {
            chageValue() {
                this.valueData = this.valueData + Math.ceil(Math.random() * 10);
            },
            chageValueObj() {
                this.valueObj.name = this.valueObj.name + Math.ceil(Math.random() * 10);
            },
            chageValueArr() {
                // this.valueArr.push(Math.ceil(Math.random() * 10));
                this.valueArr[3].name = Math.ceil(Math.random() * 10);
            }
        },
        computed: {
            computMsg() {
                return 'use computMsg';
            },
            computedMethod() {
                console.error(`computedMethod${ this.valueData}`);
                return `computedMethod${ this.valueData}`;
            }
        },
        filters: {
            filterMoney(val) {
                return `￥${ val}`;
            },
            filterTime(val) {
                const year = new Date(val).getFullYear(); 
                const month = new Date(val).getMonth(); 
                const date = new Date(val).getDate(); 
                return `${year}-${month + 1}-${date}`;
            }
        },
        watch: {
            valueData: {
                handler(newVal, old) {
                    console.error('valueData', newVal, old);
                },
                // immediate: true,
                deep: true
            },
            valueObj: {
                handler(newVal, old) {
                    console.error('valueObj', newVal, old);
                },
                // immediate: true,
                deep: true
            },
            valueArr: {
                handler(newVal, old) {
                    console.error('valueArr', newVal, old);
                },
                // immediate: true,
                deep: true
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
