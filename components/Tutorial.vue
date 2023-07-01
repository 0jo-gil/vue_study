<!-- Please remove this file from your project -->
<template>
  <div>
    <button @click="fetch()">클릭해봐</button>

    <button @click="showToast()">토스트 팝업</button>

    <div v-for="item in item[0]" :key="item.id">
      <h1>{{ item.name }}</h1>
      <p>{{ item.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  data() {
    return {
      item: [],
    };
  },
  computed: {
    todos() {
      return this.$store.state.todo.list;
    },
  },
  watch: {
    item() {
      console.log(this.item);
    },
  },
  methods: {
    fetch() {
      this.$axios
        .request("get", "https://dummyjson.com/products")
        .then((res) => this.item.push(res.products));
    },
    showToast() {
      const toast = "토스트 팝업입니다.";
      console.log(this.$store);
    },
  },
};
</script>
