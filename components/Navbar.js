import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Characters', path: '/characters' },
];

const Navbar = () => {
  return (
    <nav className="bg-dark-charcoal bg-opacity-80 backdrop-blur-sm p-4 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-heading text-naruto-orange">Path of the Ninja</a>
        </Link>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <motion.div whileHover={{ scale: 1.1, color: '#FF8C00' }}>
                <Link href={link.path} legacyBehavior>
                  <a className="text-parchment-white transition-colors duration-300">{link.name}</a>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;