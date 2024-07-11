import React from "react";

interface AuthenticationLayoutProps {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: AuthenticationLayoutProps) => {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      {children}
    </div>
  );
};

export default AuthenticationLayout;
