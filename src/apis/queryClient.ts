// src/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 실패 시 재시도 횟수
      refetchOnWindowFocus: false, // 창이 포커스될 때 데이터 리패치 방지
      staleTime: 5 * 60 * 1000, // 데이터가 신선한 상태로 유지되는 시간 (5분)
    },
    mutations: {
      retry: 1, // 실패 시 재시도 횟수
    },
  },
});
