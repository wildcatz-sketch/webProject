import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const characters = [
  { name: 'Naruto Uzumaki', image: 'https://placehold.co/300x400/FF8C00/FFFFFF?text=Naruto', description: 'The Jinchuriki of the Nine-Tails and the hero of the Hidden Leaf.' },
  { name: 'Sasuke Uchiha', image: 'https://placehold.co/300x400/4A90E2/FFFFFF?text=Sasuke', description: 'The last loyal Uchiha, driven by revenge and a quest for power.' },
  { name: 'Sakura Haruno', image: 'https://placehold.co/300x400/E91E63/FFFFFF?text=Sakura', description: 'A talented medical-nin and student of the Fifth Hokage.' },
  { name: 'Kakashi Hatake', image: 'https://placehold.co/300x400/777777/FFFFFF?text=Kakashi', description: 'The "Copy Ninja" and leader of Team 7, known for his Sharingan.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This makes the children animate one by one
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Characters() {
  return (
    <div>
      <Head>
        <title>Character Codex | Path of the Ninja</title>
      </Head>
      <h1 className="text-5xl text-center text-naruto-orange mb-8">Character Codex</h1>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {characters.map((char) => (
          <motion.div 
            key={char.name} 
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center"
            variants={itemVariants}
          >
            <div className="relative h-64 w-full">
              <Image src={char.image} alt={char.name} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h3 className="text-2xl text-chakra-blue">{char.name}</h3>
              <p className="mt-2 text-parchment-white text-opacity-80">{char.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}