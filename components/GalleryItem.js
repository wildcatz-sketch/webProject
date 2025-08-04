import { motion } from 'framer-motion';
import Image from 'next/image';

const GalleryItem = ({ src, alt, name }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 300 }}
      layout // This prop enables smooth repositioning
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={300}
        objectFit="cover"
        className="transition-transform duration-300"
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-2xl text-parchment-white">{name}</h4>
      </motion.div>
    </motion.div>
  );
};

export default GalleryItem;