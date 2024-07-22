"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ClientHeading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Blogs } from "@prisma/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ImageUpload } from "./image-upload";

interface BlogsFormPageProps {
  initialData: Blogs | null;
}

const formSchema = z.object({
  title: z.string().min(1),
  descripition: z.string().min(1),
  imageUrl: z.string().min(1),
  ticontenttle: z.string().min(1),
});

export const BlogsFormPage = ({ initialData }: BlogsFormPageProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      descripition: "",
      imageUrl: "",
      ticontenttle: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const [isLoading, setIsLoading] = useState(false);

  const title = initialData ? "Edit A Blog" : "Create A Blog";
  const descripition = initialData
    ? "Make Some Changes On Your Blog"
    : "Create Blog";
  const toastmessage = initialData ? "Blog Updated" : "Blog Created";
  const action = initialData ? "Update" : "Save";
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex-col space-y-4 flex items-center justify-center">
      <div className="w-full">
        <ClientHeading title={title} descripition={descripition} />
      </div>
      <Separator />
      <div className="w-full md:h-3/4 rounded-lg border p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Blog Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Title</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value}
                      disabled={isSubmitting}
                      OnRemove={() => field.onChange("")}
                      onChange={(url) => field.onChange(url)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
