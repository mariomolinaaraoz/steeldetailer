"use client";

import { useEffect, useState } from "react";
import { listFilesFromBucket } from "@/api/api";

import TitleSection from "../../../components/title";
import View from "./components/view";

const Galeria =()=>{
  const bucket = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || "";
  const folder = process.env.NEXT_PUBLIC_SUPABASE_FOLDER || "";

  const [bucketContent, setBucketContent] = useState<any[]>([]);

  useEffect(() => {
    const fetchBucketContent = async () => {
      try {
        const data = await listFilesFromBucket(bucket, folder);
        setBucketContent(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBucketContent();
  }, []);

  const totalImages = bucketContent.length;

  return (
    <div className="flex flex-col gap-12 pt-5 sm:pt-5 lg:pt-20 xl:pt-20">
      <TitleSection
        title="Image Gallery"
        subtitle="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />

      <div className="columns-1 gap-4 space-y-4 mx-auto p-5 sm:columns-1 lg:columns-3 xl:columns-4">
        {bucketContent.map((item, index) => (
          <div className="break-inside-avoid">
            <View key={index} index={index} bucket={bucket} folder={folder} item={item} priority={false} />
          </div>
        ))}
      </div>

      <div className="flex justify-end bg-[#111827] px-4 pt-4 pb-4 border-t border-t-foreground/10">
        <p className="text-xs">- Total Images [{totalImages}] - </p>
      </div>
    </div>
  );
};

export default Galeria;
