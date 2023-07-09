import Vue from "vue";
import axios from "axios";

const headersConfig = {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

const apiMethods = {
  install(Vue) {
    Vue.prototype.$api = {
      async request(method, url, data, header = {}) {
        const client = axios.create();
        let params = {};

        method === "get"
          ? (params = { params: data })
          : (params = {
              data: data instanceof FormData ? data : JSON.stringify(data),
            });

        if (!data) params = {};

        const axiosParams = {
          method,
          url: `http://localhost:3000${url}`,
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

Vue.use(apiMethods);
