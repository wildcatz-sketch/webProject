import { motion } from 'framer-motion';

const TimelineEvent = ({ event, side }) => {
  const variants = {
    hidden: { opacity: 0, x: side === 'left' ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="mb-8 flex justify-between items-center w-full"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
    >
      {side === 'right' && <div className="hidden md:block w-5/12"></div>}
      <div className="z-20 flex items-center bg-naruto-orange shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-dark-charcoal">{event.id}</h1>
      </div>
      <div className={`bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 p-4 ${side === 'left' ? 'md:ml-4' : 'md:mr-4'}`}>
        <h3 className="font-bold text-xl text-chakra-blue mb-2">{event.title}</h3>
        <p className="text-sm leading-snug tracking-wide text-parchment-white text-opacity-80">
          {event.description}
        </p>
      </div>
      {side === 'left' && <div className="hidden md:block w-5/12"></div>}
    </motion.div>
  );
};

export default TimelineEvent;