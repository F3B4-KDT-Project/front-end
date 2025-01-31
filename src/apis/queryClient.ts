import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // 실패 시 최대 3번 재시도 (네트워크 불안정성 보완)
      refetchOnWindowFocus: true, // 창 포커스 시 리패치 활성화 (실시간성 강화)
      refetchOnReconnect: true, // 네트워크 재연결 시 데이터 리패치
      staleTime: 0, // 데이터는 항상 신선하지 않다고 간주 (실시간 데이터 반영)
      gcTime: 5 * 60 * 1000, // 캐시는 5분 동안 유지 (짧은 시간 안에 동일 데이터를 캐시 활용)
    },
    mutations: {
      retry: 1, // Mutation은 1번만 재시도 (중복 작업 방지)
      onError: (error) => {
        console.error('Mutation 에러:', error);
      },
    },
  },
});
