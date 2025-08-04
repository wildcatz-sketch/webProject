import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Path of the Ninja | A Naruto Tribute</title>
        <meta name="description" content="A visually engaging fan website for the Naruto series." />
      </Head>

      {/* Hero Section */}
      <section className="text-center h-[60vh] flex flex-col justify-center items-center relative">
        {/* Replace with your own edited hero image */}
        <Image
          src="https://placehold.co/1200x500/1a1a1a/FF8C00?text=Naruto+Hero+Image"
          layout="fill"
          objectFit="cover"
          alt="Naruto in action"
          className="opacity-20"
          priority
        />
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-7xl md:text-9xl text-naruto-orange drop-shadow-lg z-10"
        >
          Path of the Ninja
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
          className="mt-4 text-xl md:text-2xl text-parchment-white z-10"
        >
          Explore the world of Shinobi.
        </motion.p>
      </section>

      {/* Preview Sections */}
      <section className="grid md:grid-cols-3 gap-8 mt-16 text-center">
        {/* --- FIX IS HERE --- */}
        <Link href="/about" legacyBehavior passHref>
          <motion.a whileHover={{ y: -10 }} className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl text-chakra-blue">The World</h2>
            <p className="mt-2">Discover the Great Nations, chakra, and the ways of the ninja.</p>
          </motion.a>
        </Link>
        {/* --- AND HERE --- */}
        <Link href="/gallery" legacyBehavior passHref>
          <motion.a whileHover={{ y: -10 }} className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl text-chakra-blue">Gallery</h2>
            <p className="mt-2">View iconic moments, characters, and powerful jutsu.</p>
          </motion.a>
        </Link>
        {/* --- AND HERE --- */}
        <Link href="/timeline" legacyBehavior passHref>
          <motion.a whileHover={{ y: -10 }} className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl text-chakra-blue">History</h2>
            <p className="mt-2">Follow the key milestones of the epic Naruto saga.</p>
          </motion.a>
        </Link>
      </section>
    </div>
  );
}