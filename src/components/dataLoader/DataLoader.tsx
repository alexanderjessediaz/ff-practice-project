import React, { useLayoutEffect, useState } from "react";

import {useAuthUser} from 'next-firebase-auth';
import { PageLoader } from "@/components/shared/pageloader/";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hooks";
import {loginUser} from '@/store/user/actions';
import {getUser} from '@/lib/services/user';
import Login from "../../pages/login";
import { User } from "@/models/index";

type DataLoaderProps = {
  children: React.ReactNode;
};

export const DataLoader = ({ children }: DataLoaderProps) => {
  const authUser = useAuthUser();

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const loadData = async () => {
      localStorage.clear(); //clear stale Store data in Local Storage

      const user = await getUser(authUser.email); //get the User Information
      if (user.error) {
        return;
      }

      const userData = {...(user.data!.data()! as User)};
      dispatch(loginUser(userData));
    }
  }, []);

  if (typeof window === "undefined" || isLoading) {
    return <PageLoader />;
  }

  if (!isLoading) {
    return <Login />;
  }

  return <>{children}</>;
};
