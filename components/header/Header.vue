<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menu" :key="item.id">
          <nuxt-link :to="{ path: item.url }">{{ item.title }}</nuxt-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      sidebar: false,
    };
  },
  computed: {
    // 첫번째 인수는 실제로 vuex에 자동으로 등록될 store파일 이름, 두번째 인수는 배열로 내부 state 값
    ...mapGetters("header-menu", ["menu"]),
  },
};
</script>
