import UploadButton from './upload-button';
import cloudinary from 'cloudinary';
import CloudneryImage from './cloudnery-image';

const GalleryPage = async () => {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(5)
    .execute()) as { resources: any[] };
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
              src={result.public_id}
              // src={'exrkqr4vkit5n8boyqk8'}
              alt="Description of my image"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
