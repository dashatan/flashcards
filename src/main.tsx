import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import {
  contentKeys,
  fetchConceptManifest,
  fetchFlashcardManifest,
  getConceptIdFromPathname,
  prefetchConceptDetail,
} from "@/lib/api";
import { queryClient } from "@/lib/queryClient";

import { routeTree } from "./routeTree.gen";

import "./global.css";

const router = createRouter({  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

async function registerServiceWorker() {
  if (import.meta.env.PROD && "serviceWorker" in navigator) {
    const { getSerwist } = await import("virtual:serwist");
    const serwist = await getSerwist();
    if (serwist) {
      await serwist.register();
    }
  }
}

registerServiceWorker();

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element not found");

async function bootstrap(container: HTMLElement) {
  const conceptId = getConceptIdFromPathname(window.location.pathname);
  const prefetches = [
    queryClient.prefetchQuery({
      queryKey: contentKeys.flashcards,
      queryFn: fetchFlashcardManifest,
      staleTime: Infinity,
    }),
    queryClient.prefetchQuery({
      queryKey: contentKeys.conceptsIndex,
      queryFn: fetchConceptManifest,
      staleTime: Infinity,
    }),
  ];

  if (conceptId) {
    prefetches.push(prefetchConceptDetail(queryClient, conceptId));
  }

  await Promise.all(prefetches);
  createRoot(container).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
}

bootstrap(rootEl);
