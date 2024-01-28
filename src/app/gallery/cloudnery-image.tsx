'use client';

import { HeartIcon } from '@/components/icons/heart';
import { CldImage } from 'next-cloudinary';
import { setAsFavorite } from './actions';
import { useTransition } from 'react';
import { SearchResult } from './page';
import { FullHeartIcon } from '@/components/icons/full-heart';

export default function CloudneryImage(
  props: any & { imageData: SearchResult },
) {
  const [transition, setTransition] = useTransition();
  const isFavorite = props.imageData.tags?.includes('favorites');
  const { public_id } = props.imageData;
  return (
    <div className="relative">
      <CldImage {...props} src={public_id} />
      {isFavorite ? (
        <FullHeartIcon
          onClick={() => {
            setTransition(() => setAsFavorite(public_id, false));
          }}
          className="absolute top-2 right-2 hover:text-white-500 cursor-pointer"
        />
      ) : (
        <HeartIcon
          onClick={() => {
            setTransition(() => setAsFavorite(public_id, true));
          }}
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
        />
      )}
    </div>
  );
}
