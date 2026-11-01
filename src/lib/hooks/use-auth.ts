"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useAuth() {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const user = session?.user ?? null;
  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  const handleSignIn = useCallback(
    (provider?: "credentials" | "github" | "google", callbackUrl = "/dashboard") => {
      if (provider === "credentials") {
        router.push(`/auth/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
      } else {
        signIn(provider, { callbackUrl });
      }
    },
    [router]
  );

  const handleSignOut = useCallback(
    (callbackUrl = "/") => {
      signOut({ callbackUrl });
    },
    []
  );

  const refreshUser = useCallback(async () => {
    await update();
    router.refresh();
  }, [update, router]);

  return {
    user,
    isLoading,
    isAuthenticated,
    signIn: handleSignIn,
    signOut: handleSignOut,
    refreshUser,
  };
}
