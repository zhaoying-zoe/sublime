<template>
    <div>123456</div>
</template>

<script>
    export default {
        name: 'refreshPage',
        beforeRouteEnter(to, from, next) {
            // 路由跳转前
            const name = to.params.name || from.name;

            next(vm => {
                vm.$router.push({
                    name,
                    params: to.params
                })
            });
        }
    }
</script>