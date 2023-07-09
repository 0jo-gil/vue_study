<template>
  <div>
    <!-- <FormInput label="" placeholder="제목" /> -->
    <input placeholder="제목" v-model="title" />
    <editor
      ref="editor"
      align="left"
      :options="options"
      initial-edit-type="wysiwyg"
      @change="editorChangeHandler"
    ></editor>
    <viewer v-if="toggle" :initialValue="text"></viewer>

    <button @click="submitHandler">확인</button>
    <button @click="publishPost">테스트</button>
  </div>
</template>

<script>
import writing from "../../mixins/writing";
export default {
  mixins: [writing],
  data() {
    return {
      toggle: false,
      options: {
        language: "ko",
        hooks: {
          addImageBlobHook: (blob, callback, type) => {
            if (!blob) return false;
            const formData = new FormData();
            formData.append("file", blob);

            // this.$axios
            //   .request("post", "/api/admin/post/image", formData, {
            //     "Content-Type": "multipart/form-data",
            //   })
            //   .then((res) => {
            //     callback(res.data[0], blob.name);
            //   })
            //   .catch((e) => {
            //     console.log(e);
            //   });
          },
        },
      },
    };
  },
  methods: {
    editorChangeHandler() {
      let html = this.$refs.editor.$el.querySelector(
        ".toastui-editor-ww-container .toastui-editor-contents"
      ).innerHTML;

      this.setContent(html);
    },
  },
};
</script>
