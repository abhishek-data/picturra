import UploadButton from './upload-button';
import cloudinary from 'cloudinary';
import CloudneryImage from './cloudnery-image';

export type SearchResult = {
  public_id: string;
  tags: string[];
}

const GalleryPage = async () => {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(1)
    .execute()) as { resources: SearchResult[] };
  console.log(results);
  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results?.resources?.map((result) => (
            <CloudneryImage
              key={result.public_id}
              width="500"
              height="300"
              imageData={result}
              alt="Description of my image"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
