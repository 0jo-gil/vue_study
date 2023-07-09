<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="username" />
      <input type="password" v-model="password" placeholder="password" />
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      let formData = new FormData();

      formData.append("username", this.username);
      formData.append("password", this.password);

      // this.$axios
      //   .request("post", "/api/admin/member/login", formData, {
      //     "Content-Type": "multipart/form-data",
      //   })
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
    },
  },
};
</script>
