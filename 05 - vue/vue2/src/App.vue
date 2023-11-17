<template>
    <div id="app">
        <button @click="goAboutPage('about')">about</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            goAboutPage(name) {
                if (this.$route.name === name) {
                    this.$router.push({
                        name: 'refresh',
                        params: {
                            name
                        }
                    });

                // this.$router.push({path: 'xxx'}) 会将query参数添加到url中
                // this.$router.push({
                //   path: '/',
                //   query: {
                //     name
                //   }
                // })
                } else {
                    this.$router.push({
                        name
                    });
                }
            }
        }
    };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #ccc;
}
</style>
