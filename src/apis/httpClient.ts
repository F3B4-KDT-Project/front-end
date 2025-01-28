/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';

// HttpClient 인터페이스를 통해 AxiosInstance에 제네릭 타입을 추가하고 메서드 반환값의 타입을 명확히 정의.
interface HttpClient extends AxiosInstance {
  // get, post, put, patch, delete 메서드를 오버라이딩하여 반환값을 Promise로 감싸도록 함.
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;

  post<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;

  put<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;

  patch<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;

  delete<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
}

// http 객체를 HttpClient 타입으로 내보냄.
export const http: HttpClient = axiosInstance;
