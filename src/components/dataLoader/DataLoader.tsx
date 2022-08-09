import React, { useLayoutEffect } from "react";

import { useAuthUser } from "@/lib/hooks/useAuthUser";
import { PageLoader } from "@/components/shared/pageloader/";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hooks";
import { getTestData } from "@/lib/services/test";
import Login from "../../pages/login";

type DataLoaderProps = {
  children: React.ReactNode;
};

export const DataLoader = ({ children }: DataLoaderProps) => {
  const { user, loading } = useAuthUser();
  const router = useRouter();

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const unSubscribe = getTestData(dispatch);

    return () => {
      unSubscribe();
    };
  }, []);

  if (typeof window === "undefined" || loading) {
    return <PageLoader />;
  }

  if (!loading && !user) {
    return <Login />;
  }

  return <>{children}</>;
};
