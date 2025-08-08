"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "@/styles/nprogress.css";

export default function PageLoader() {
  const pathname = usePathname();
  const isNavigating = useRef(false);
  const originalPush = useRef();
  const originalReplace = useRef();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    // Start loader on navigation
    const startLoader = () => {
      if (!isNavigating.current) {
        NProgress.start();
        isNavigating.current = true;
      }
    };

    // Stop loader on route change complete
    const stopLoader = () => {
      NProgress.done();
      isNavigating.current = false;
    };

    // Patch pushState and replaceState to start loader
    if (!originalPush.current)
      originalPush.current = window.history.pushState;
    if (!originalReplace.current)
      originalReplace.current = window.history.replaceState;

    window.history.pushState = function (...args) {
      startLoader();
      return originalPush.current.apply(this, args);
    };
    window.history.replaceState = function (...args) {
      startLoader();
      return originalReplace.current.apply(this, args);
    };

    // Listen for browser back/forward
    window.addEventListener("popstate", startLoader);
    window.addEventListener("beforeunload", startLoader);

    // Stop loader when pathname changes
    stopLoader();

    return () => {
      window.history.pushState = originalPush.current;
      window.history.replaceState = originalReplace.current;
      window.removeEventListener("popstate", startLoader);
      window.removeEventListener("beforeunload", startLoader);
    };
    // eslint-disable-next-line
  }, [pathname]);

  return null;
}
