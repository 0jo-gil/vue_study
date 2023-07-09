import Vue from "vue";
import axios from "axios";

const client = axios.create();

const headersConfig = {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

const API_URL = process.env.VUE_APP_API_URL;

const axiosPlugin = {
  install(Vue) {
    Vue.prototype.$axios = {
      async request(method, url, data, header = {}) {
        let params = {};

        method === "get"
          ? (params = { params: data })
          : (params = {
              data: data instanceof FormData ? data : JSON.stringify(data),
            });

        console.log(params);

        if (!data) params = {};

        console.log(header);

        const axiosParams = {
          method,
          url: `http://localhost:3000${url}`,
          // url: url,
          ...params,
          headers: {
            ...headersConfig,
            ...header,
          },
          timeout: 30000,
        };

        const result = await client(axiosParams);

        return result.data;
      },
    };
  },
};

Vue.use(axiosPlugin, axios);
