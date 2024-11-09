import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
  }),
  mutationCache: new MutationCache({
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      useErrorBoundary: true,
      staleTime: 60 * 1000,
      cacheTime: 60 * 10 * 1000,
      keepPreviousData: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});
