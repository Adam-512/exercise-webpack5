<script setup>
import { ref } from "@vue/reactivity";
const data = ref(10);
const add = () => {
  data.value++;
};
const minus = () => {
  data.value--;
};
console.log("1111");
</script>

<template>
  <section class="banner"></section>
  <h1><img src="./assets/image/avatar.jpeg" alt="" /> Hello there!</h1>
  <p>Counter:{{ data }}</p>
  <button @click="add">Add</button>
  <button @click="minus">minus</button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  font-family: silka;
}
.banner {
  min-height: 300px;
  background: url("./assets/image/banner.jpg") no-repeat;
  background-size: contain;
}
img {
  width: 35px;
}
button {
  background: transparent;
  border: none;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 5px 15px;
  margin-right: 15px;
  cursor: pointer;
}
</style>
