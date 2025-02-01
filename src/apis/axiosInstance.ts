import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000, // 요청 타임아웃 (ms)
  headers: {
    'Content-Type': 'application/json', // 기본 헤더 설정
  },
  withCredentials: true, // 쿠키 설정
});

// 로그인 API를 다시 호출하여 새로운 토큰 발급
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const loginId = localStorage.getItem('loginId'); // 로그인 시 저장해둔 ID

    if (!refreshToken || !loginId) {
      throw new Error('Refresh Token 또는 로그인 ID 없음');
    }

    // 로그인 API 재호출
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
      {
        loginId, // 기존 로그인 ID를 함께 전달
      }
    );

    // 새롭게 발급받은 토큰을 저장
    const { accessToken, refreshToken: newRefreshToken } =
      response.data.tokenResponse;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', newRefreshToken);

    return accessToken;
  } catch (error) {
    console.error('토큰 갱신 실패:', error);
    localStorage.clear();
    location.href = '/sign-in';
    return null;
  }
};

// 요청 인터셉터 - 모든 요청에 Access Token 추가
axiosInstance.interceptors.request.use(
  async (config) => {
    // 토큰 추가
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('loginId');
      location.href = '/sign-in';
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 - Access Token 만료 시 자동 갱신
axiosInstance.interceptors.response.use(
  async (response) => response.data,

  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 무한 루프 방지

      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest); // 요청 다시 보내기
      }
    }

    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
