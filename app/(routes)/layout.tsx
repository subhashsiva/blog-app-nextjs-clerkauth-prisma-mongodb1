import React from "react";
import Header from "@/components/ui/header";

interface HomeLayoutPageProps {
  children: React.ReactNode;
}

const HomeLayoutPage = ({ children }: HomeLayoutPageProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default HomeLayoutPage;
