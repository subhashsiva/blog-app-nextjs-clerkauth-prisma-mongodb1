"use client";

import { UserButton, useSession } from "@clerk/nextjs";

import React from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export const UserProfileButton = () => {
  const { isSignedIn } = useSession();
  const router = useRouter();
  return (
    <div className="ml-auto">
      {isSignedIn ? (
        <UserButton afterSwitchSessionUrl="/" />
      ) : (
        <Button onClick={() => router.push("/sign-in")}>Login</Button>
      )}
    </div>
  );
};
