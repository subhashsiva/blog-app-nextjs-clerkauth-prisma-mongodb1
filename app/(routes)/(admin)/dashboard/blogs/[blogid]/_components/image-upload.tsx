"use client";

import { ImagePlus } from "lucide-react";
import React, { useState } from "react";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  OnRemove: (value: string) => void;
  value: string;
}

export const ImageUpload = ({
  disabled,
  onChange,
  OnRemove,
  value,
}: ImageUploadProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

  return (
    <div>
      {value ? (
        <React.Fragment>
          <p>our image</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className=" w-full h-60 aspect-video relative rounded-md flex items-center justify-center flex-col gap-2">
            {isLoading ? (
              <p>Progress</p>
            ) : (
              <label>
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center cursor-pointer text-neutral-500">
                  <ImagePlus className="w-10 h-10" />
                  <p>Upload an image</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="w-0 h-0"
                  onChange={onUpload}
                />
              </label>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
