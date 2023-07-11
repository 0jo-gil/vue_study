export default {
  data() {
    return {
      postRequest: { categoryId: 1 },
      thumbnail: null,
    };
  },
  created() {},
  methods: {
    editorChangeHandler() {
      let html = this.$refs.editor.$el.querySelector(
        ".toastui-editor-ww-container .toastui-editor-contents"
      ).innerHTML;

      this.postRequest = {
        ...this.postRequest,
        content: html,
      };
    },
    thumbnailChangeHandler(e) {
      let file = e.target.files[0];

      this.thumbnail = file;
    },

    changeHandler(e) {
      let name = e.target.name;
      let value = e.target.value;

      this.postRequest = {
        ...this.postRequest,
        [name]: value,
      };
    },
    submitHandler() {
      const formData = new FormData();
      const blob = new Blob([JSON.stringify(this.postRequest)], {
        type: "application/json",
      });

      formData.append("file", this.thumbnail);
      formData.append("request", blob);

      this.$api
        .request("post", "/api/admin/post", formData, {
          "Content-Type": "multipart/form-data",
        })
        .then((res) => {
          this.$router.push(`/post/${res.data}`);
        })
        .catch((err) => console.log(err));
    },
  },
};
