<template>
    <div>
        <!-- 匿名插槽 -->
        <!-- <slot></slot> -->

        <!-- 具名插槽 -->
        <!-- <slot name="header"></slot> -->

        <!-- 使用 `slotProps` 对象将消息属性传递给父组件 -->
        <slot :message="message"></slot>
        <!-- 这里的name属性表示当前插槽是个具名插槽 -->
        <slot :message="message" :name="name"></slot>
    </div>
</template>
<script>

    export default ({
        name: 'useSlot',
        data() {
            return {
                message: 'tom',
                name: 'age'
            };
        },
        mounted() {
            console.error(this);
        }
    });
</script>
