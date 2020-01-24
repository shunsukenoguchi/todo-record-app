<template>
  <div class="box">
    <span class="item-name">Todoアプリ</span>

    <div class="text-wrap">
      <input type="text" @click="login">
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            input: ''
        }
    },
    methods: {
        login() {
            window.alert('ログインしろ！')
        }
    }
}
</script>
<style lang="scss" scoped>
input[type='text']{
  width: 100%;
  max-width: 400px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>