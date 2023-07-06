<template>
  <div>
    <!-- <FormInput label="" placeholder="제목" /> -->
    <input placeholder="제목" v-model="title" />
    <editor
      ref="editor"
      align="left"
      initial-edit-type="wysiwyg"
      @change="editorChangeHandler"
    ></editor>
    <viewer v-if="toggle" :initialValue="text"></viewer>

    <button @click="submitHandler">확인</button>
  </div>
</template>

<script>
import writing from "../../mixins/writing";
export default {
  mixins: [writing],
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    editorChangeHandler() {
      let html = this.$refs.editor.$el.querySelector(
        ".toastui-editor-ww-container .toastui-editor-contents"
      ).innerHTML;

      this.setContent(html);
    },
    submitHandler() {
      this.$axios
        .request("post", "/api/admin/post", {
          title: this.title,
          content: this.text,
          categoryId: 1,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
};
</script>
