import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000, // 요청 타임아웃 (ms)
  headers: {
    'Content-Type': 'application/json', // 기본 헤더 설정
  },
  withCredentials: true, // 쿠키 설정
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  async (config) => {
    // 토큰 추가
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      localStorage.clear();
      location.href = '/sign-in';
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  async (response) => response,

  async (error) => {
    // 에러 처리 로직 추가
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
