"use client";

import { storage } from "@/config/firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
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
  const [progress, setProgress] = useState(0);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = e.target.files && e.target.files[0];
    setIsLoading(true);
    const uploadTask = uploadBytesResumable(
      ref(storage, `Images/${file.name}`),
      file,
      { contentType: file.type }
    );

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          onChange(downloadURL);
          setIsLoading(false);
        });
      }
    );
  };

  return (
    <div>
      {value ? (
        <React.Fragment>
          <div className=" w-full h-64 rounded-md overflow-hidden relative flex items-center justify-center">
            <Image
              alt="Blog Image"
              src={value}
              className=" w-full h-full object-cover"
              fill
            />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className=" w-full h-60 aspect-video relative rounded-md flex items-center justify-center flex-col gap-2">
            {isLoading ? (
              <p>Progress : {progress.toFixed(2)}</p>
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
