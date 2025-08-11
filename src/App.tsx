import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Suspense } from 'react';
import { GlobalLoadingOverlay } from "@/components/ui/loader-global-state";
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.tsx';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense
        fallback={<GlobalLoadingOverlay />}
      >
        <RouterProvider router={router} />
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
