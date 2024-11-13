import axios, {type AxiosError} from 'axios';
const API_BASE_URL = 'http://localhost:3333/';
const NEXT_PUBLIC_NODE_ENV: string = 'development';
declare global {
  interface Window {
    csrfTokenGlobal: string;
  }
}

const csrfToken = window.csrfTokenGlobal;

const clientApi = axios.create({
    baseURL: NEXT_PUBLIC_NODE_ENV === 'production' ? `/api` : API_BASE_URL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
  },
  withCredentials: true,
});

// Global error handler for axios response
clientApi.interceptors.response.use(
  undefined,
  function handleGlobalAPIError(error: AxiosError) {
    console.error(
      '\x1b[31m%s\x1b[0m', // Red color
      'clientApi error: ',
      error,
      'clientApi error end'
    );
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 401:
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default clientApi;