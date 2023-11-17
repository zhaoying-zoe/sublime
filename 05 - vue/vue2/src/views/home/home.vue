<template>
    <div class="hello">
        home page
    </div>
</template>

<script>
    export default {
        name: 'homePage',
        mounted() {
            console.log(this.$store);
            console.log(this.$store.state.message);
        }
    };
</script>