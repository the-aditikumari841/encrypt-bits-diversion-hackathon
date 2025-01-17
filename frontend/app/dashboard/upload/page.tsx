"use client";
import React, { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Dropzone from "react-dropzone";
import { Button } from "@/components/ui/button";

export default function page() {
  const [images, setImages] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setImages([...images, ...acceptedFiles]);
  };

  console.log(images);

  const handleUpload = () => {};

  return (
    <div className="pt-10 max-w-[1250px] w-11/12 mx-auto">
      <p className="mb-10 font-bold uppercase text-xl">
        Upload your desired image
      </p>
      <Dropzone onDrop={onDrop} multiple={false}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <section className="h-[400px] border border-dashed border-black mb-10 rounded-md">
            <div
              {...getRootProps()}
              className="w-full h-full flex justify-center items-center"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop to Upload</p>
              ) : (
                <p>Upload or Drag n drop to upload</p>
              )}
            </div>
          </section>
        )}
      </Dropzone>

      {images.length > 0 && (
        <div>
          <p>Selected Images:</p>
          <div className="grid grid-cols-5 gap-5">
            {/* {images.map((image) => (
              <Image src={image.src} width={200} height={200} />
            ))} */}
          </div>
        </div>
      )}

      <Button onClick={handleUpload} className="my-10">Upload</Button>
    </div>
  );
}
