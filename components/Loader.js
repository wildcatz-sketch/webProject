import { motion } from 'framer-motion';

// A simple Konoha Leaf SVG. You can replace this with your own SVG file.
const KonohaLeaf = () => (
  <svg width="100" height="100" viewBox="0 0 258 253" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M129 0C129 0 148 57.5 200 66C252 74.5 258 126.5 258 126.5C258 126.5 207.5 137.5 180 174.5C152.5 211.5 129 253 129 253C129 253 105.5 211.5 78 174.5C50.5 137.5 0 126.5 0 126.5C0 126.5 6 74.5 58 66C110 57.5 129 0 129 0Z" fill="#F5F5F5"/>
  </svg>
);

const loaderVariants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: 'easeInOut' }
  }
};

const leafVariants = {
  initial: {
    scale: 0,
    rotate: -180
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
      ease: [0.6, 0.01, -0.05, 0.95],
      type: 'spring',
      stiffness: 100
    }
  }
};

const Loader = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-dark-charcoal flex justify-center items-center z-50"
      variants={loaderVariants}
      initial="initial"
      exit="exit"
      onAnimationComplete={onAnimationComplete}
    >
      <motion.div variants={leafVariants} initial="initial" animate="animate">
        <KonohaLeaf />
      </motion.div>
    </motion.div>
  );
};

export default Loader;