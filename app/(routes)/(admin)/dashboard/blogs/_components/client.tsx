"use client";

import { Button } from "@/components/ui/button";
import { ClientHeading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface BlogsClientPageProps {
  data: [];
}

export const BlogsClientPage = ({ data }: BlogsClientPageProps) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <ClientHeading
          title={`Blogs (${data.length})`}
          descripition="Manage Your Blogs In Single Place"
        />

        <Button onClick={() => router.push("/dashboard/blogs/new")}>
          <Plus className="w-5 h-5 mr-2" />
          Add New
        </Button>
      </div>
    </>
  );
};
