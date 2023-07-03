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
  plugins: [{ src: "~/plugins/axios.js", ssr: false }, "@/plugins/vuetify"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  ildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/dotenv", "@nuxtjs/proxy"],

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
