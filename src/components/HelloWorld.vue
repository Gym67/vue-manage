<template>
  <div class="hello">
    <router-link to="/">
      <el-button>按钮</el-button>
    </router-link>
    <router-link to="/user">
      <el-button type="primary">主要按钮</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
