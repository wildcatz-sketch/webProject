import Head from 'next/head';
import GalleryItem from '../components/GalleryItem';

// Replace with your actual image data
const galleryData = [
  { src: 'https://placehold.co/500x300/1a1a1a/FFFFFF?text=Team+7', name: 'Team 7 United' },
  { src: 'https://placehold.co/500x300/FF8C00/FFFFFF?text=Rasengan', name: 'Naruto\'s Rasengan' },
  { src: 'https://placehold.co/500x300/4A90E2/FFFFFF?text=Chidori', name: 'Sasuke\'s Chidori' },
  { src: 'https://placehold.co/500x300/E60023/FFFFFF?text=Sharingan', name: 'Sharingan Eye' },
  { src: 'https://placehold.co/500x300/1a1a1a/FFFFFF?text=Akatsuki', name: 'The Akatsuki' },
  { src: 'https://placehold.co/500x300/FF8C00/FFFFFF?text=Sage+Mode', name: 'Sage Mode' },
];

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>Shinobi Gallery | Path of the Ninja</title>
      </Head>
      <h1 className="text-5xl text-center text-naruto-orange mb-8">Shinobi Gallery</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map((item, index) => (
          <GalleryItem key={index} src={item.src} alt={item.name} name={item.name} />
        ))}
      </div>
    </div>
  );
}