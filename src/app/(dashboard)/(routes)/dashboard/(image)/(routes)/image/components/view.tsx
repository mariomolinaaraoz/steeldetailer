import React from "react";
import Image from "next/image";

import {
    Heart
  } from "lucide-react";

type Props = {
    index:number;
    bucket:any;
    folder:any;
    item:any;
  priority?: boolean;
};

const View = ({index, bucket, folder, item, priority }: Props) => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const storage = process.env.NEXT_PUBLIC_SUPABASE_STORAGE || "";  
  return (
      <div className="relative">
        <Image
          key={index}
          className="rounded-lg mx-auto"
          width={650}
          height={366}
          sizes="(min-width: 720px) 650px, calc (95.5vw -19px)"
          src={url + storage + "/" + bucket + "/" + folder + "/" + item.name}
          alt={item.name}
          priority={!!priority}
        />
        <div className="absolute top-1 right-1">
            <Heart className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300"/>
        </div>        
      </div>  );
};

export default View;