<template>
  <div>
    <!-- <FormInput label="" placeholder="제목" /> -->
    <input placeholder="제목" name="title" @change="changeHandler($event)" />
    <input type="file" @change="thumbnailChangeHandler($event)" />
    <editor
      ref="editor"
      align="left"
      :options="options"
      initial-edit-type="wysiwyg"
      @change="editorChangeHandler"
    ></editor>
    <viewer v-if="toggle" :initialValue="text"></viewer>

    <button @click="submitHandler">확인</button>
  </div>
</template>

<script>
import WritingMixin from "@/mixins/writing-mixin";
export default {
  mixins: [WritingMixin],
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

            this.$api
              .request("post", "/api/admin/post/image", formData, {
                "Content-Type": "multipart/form-data",
              })
              .then((res) => {
                callback(res.data[0], blob.name);
              })
              .catch((e) => {
                console.log(e);
              });
          },
        },
      },
    };
  },
  methods: {},
};
</script>
