import { mapMutations } from "vuex";

export default {
  computed: {
    title: {
      get() {
        return this.$store.state.write.title;
      },
      set(value) {
        this.setTitle(value);
      },
    },
    content: {
      get() {
        return this.$store.state.write.content;
      },
      set(value) {
        console.log(value);

        this.setContent(value);
      },
    },
  },
  methods: {
    ...mapMutations("write", ["setTitle", "setContent"]),

    validate() {},
    clearForm() {
      this.title = "";
      this.content = "";
    },

    submitHandler() {
      console.log(this.content);
      this.$axios
        .request("post", "/api/admin/post", {
          title: this.title,
          content: this.content,
          categoryId: 1,
        })
        .then((res) => {
          console.log(res);
          // this.$router.push(`/post/${res.data}`);
        })
        .catch((err) => console.log(err));
    },
  },
};
