import NProgress from 'nprogress';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
  
});

const responseBody = (response: AxiosResponse<any>) => response.data;

const requests = {
  get: (url: string, params?: {}) => httpClient.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) => httpClient.post(url, body).then(responseBody),
  put: (url: string, body?: {}) => httpClient.put(url, body).then(responseBody),
  delete: (url: string) => httpClient.delete(url).then(responseBody),
};

// TODO => Implement cache (axios-cache-adapter / Vuequery)

/**
 * Add accessToken if exists in localStorage
 */
 httpClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // NProgress.start();

    const accessToken = localStorage.getItem('accessToken');
    const isRefreshUrl = config.url === '/auth/refresh/';

    if (accessToken && !isRefreshUrl) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Show notify with error message
 */
 httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    NProgress.done();

    if (response.status === 204 || response.status === 201) {
      // TODO => Show Quasar success notify
    }

    // console.log(response);
    return response;
  },
  async (error) => {
    const refreshToken = localStorage.getItem('refreshToken');

    if (error.response.status === 401 && refreshToken) {
      // TODO => Create Refresh token logic
    }

    // console.log(error.response.data);
    NProgress.done();

    if (!error.response.data.message.search('\n')) {
      // TODO => Show Quasar error notify
    }

    return Promise.reject(error);
  },
);

export default requests;
