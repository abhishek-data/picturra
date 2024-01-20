"use client";

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

type UploadResult = {
  info: {
    public_id: string;
  },
  event: "success",
}


export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id)
        }}
        uploadPreset="l8x9p7fx" />
      {imageId && <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />}

    </main>
  )
}


// {
//   "event": "success",
//     "info": {
//     "id": "uw-file6",
//       "batchId": "uw-batch5",
//         "asset_id": "70bec2dd494870a4eb362664c0da106e",
//           "public_id": "ozv1uyv7sld7ojyxvae3",
//             "version": 1705751382,
//               "version_id": "427d8698985f623f9f3ed776ab1fa3dc",
//                 "signature": "3e801666f06656b5e151012efe0295c745cfcfd2",
//                   "width": 1231,
//                     "height": 794,
//                       "format": "png",
//                         "resource_type": "image",
//                           "created_at": "2024-01-20T11:49:42Z",
//                             "tags": [],
//                               "bytes": 106456,
//                                 "type": "upload",
//                                   "etag": "b2ab5af9f0cb47d3bb8e54c1cf0c0a3e",
//                                     "placeholder": false,
//                                       "url": "http://res.cloudinary.com/dgl713axv/image/upload/v1705751382/ozv1uyv7sld7ojyxvae3.png",
//                                         "secure_url": "https://res.cloudinary.com/dgl713axv/image/upload/v1705751382/ozv1uyv7sld7ojyxvae3.png",
//                                           "folder": "",
//                                             "access_mode": "public",
//                                               "original_filename": "App.jsx - react-otp-login [WSL_ Ubuntu] - Visual Studio Code 15-01-2024 10_06_19",
//                                                 "path": "v1705751382/ozv1uyv7sld7ojyxvae3.png",
//                                                   "thumbnail_url": "https://res.cloudinary.com/dgl713axv/image/upload/c_limit,h_60,w_90/v1705751382/ozv1uyv7sld7ojyxvae3.png"
//   }
// }