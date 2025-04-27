"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

type RouteKey = "login" | "home" | "dashboard";

interface UseRedirectProps {
  route?: RouteKey;
  params?: Record<string, string | number>;
}

const routes: Record<RouteKey, string> = {
  login: "/login",
  home: "/home",
  dashboard: "/dashboard",
};

function useRedirect() {
  const router = useRouter();

  const redirect = useCallback(
    (props: UseRedirectProps = { route: "home" }) => {
      const { route = "home", params = {} } = props;

      let path = routes[route];

      Object.entries(params).forEach(([key, value]) => {
        path = path.replace(`:${key}`, String(value));
      });

      router.push(path);
    },
    [router]
  );

  return redirect;
}

export default useRedirect;
