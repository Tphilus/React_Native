import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Toaster } from "sonner-native";
export default function Providers({ children }: { children: React.ReactNode }) {
  const queryCLient = new QueryClient();

  return (
    <QueryClientProvider client={queryCLient}>
      {children}
      <Toaster position="bottom-center" />
    </QueryClientProvider>
  );
}
