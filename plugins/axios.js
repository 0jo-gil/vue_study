import Vue from "vue";
import axios from "axios";

const client = axios.create();

let API_URL = process.env.VUE_APP_API_URL;

const headersConfig = {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

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

        if (!data) params = {};

        const axiosParams = {
          method,
          // url: `${API_URL}${url}`,
          url: url,
          ...params,
          headers: {
            ...header,
            ...headersConfig,
          },
          timeout: 30000,
        };

        const result = await client(axiosParams);

        return result.data;
      },
    };
  },
};

Vue.use(axiosPlugin);
