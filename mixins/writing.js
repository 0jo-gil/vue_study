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
  },
};
