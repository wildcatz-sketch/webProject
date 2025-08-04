// --- Start of code for pages/_app.js ---

import '../styles/globals.css';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';

// THIS IS THE LINE THAT FIXES THE ERROR
import { motion } from 'framer-motion'; 

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);

  // This improved logic runs the loader only once per browser session
  useEffect(() => {
    if (sessionStorage.getItem('hasLoaded')) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 2500); // Loader duration
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Component {...pageProps} />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;

// --- End of code for pages/_app.js ---