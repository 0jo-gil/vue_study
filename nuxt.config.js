import { VuetifyLoaderPlugin } from "vuetify-loader";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "frontend",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/plugins/axios", ssr: false },
    { src: "~/plugins/api", ssr: false },
    { src: "~/plugins/vuetify", ssr: false },
    { src: "~/plugins/tui-editor", ssr: false },
    { src: "~/plugins/global-components", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  ildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/proxy",
    // https://blog.naver.com/yug311861/222905533767?&isInf=true&infParams=eyJzY2lkIjoxNzA3MDE3ODkyNjk3MjgsInNraWQiOjI5ODQ2NTIwNDIzNDE3NiwiY2lkIjo1MDU1NDM1MjM0NjU1MDQsInF1ZXJ5IjoiQVBJIn0=
    // "@nuxtjs/axios",
    "cookie-universal-nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      sass: {
        // @ts-ignore
        additionalData: "@import '@/assets/styles/vuetify.scss'",
      },
    },
    vendor: ["axios"],
  },

  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/dotenv"],

  proxy: {
    "/api/": {
      target: "http://localhost:8080",
      // pathRewrite: { "^/api/": "/api/" },
    },
  },

  store: true,
};
