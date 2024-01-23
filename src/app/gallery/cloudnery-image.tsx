"use client";

import { CldImage } from 'next-cloudinary';

export default function CloudneryImage(props: any) {
  return (
    <CldImage {...props}/>
  );
}
