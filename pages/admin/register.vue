<template>
  <div>
    <FormInput label="" placeholder="제목" />
    <editor
      ref="editor"
      align="left"
      initial-edit-type="wysiwyg"
      @change="editorChangeHandler"
    ></editor>
    <viewer v-if="toggle" :initialValue="text"></viewer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "????",
      toggle: false,
    };
  },
  methods: {
    editorChangeHandler() {
      console.log(this.$refs.editor.$el);
    },
  },
};
</script>
