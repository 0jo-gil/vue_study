<template>
  <div>
    <div v-if="hasLabel">
      <span>{{ label }}</span>
      <slot></slot>
    </div>
    <div>
      <input
        :label="label"
        :type="type"
        v-model="inputValue"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "type", "placeholder", "disabled"],
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    hasLabel() {
      return this.label == null || this.label === "" ? false : true;
    },
  },
};
</script>
