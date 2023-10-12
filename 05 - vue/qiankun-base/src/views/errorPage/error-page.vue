<template>
  <div class="error-page">
    <h1>Oops! Something went wrong.</h1>
    <button @click="goHome">go home</button>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    goHome() {
      this.$router.push('/');
      // console.error(this);
    }
  }
};
</script>

<style scoped>
.error-page {
  text-align: center;
  margin-top: 100px;
}

.error-page h1 {
  font-size: 48px;
  color: #f00;
}

.error-page p {
  font-size: 24px;
}
</style>
