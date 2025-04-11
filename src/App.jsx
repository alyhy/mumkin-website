import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="text-center p-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-accent"
      >
        ممكن
      </motion.h1>
      <p className="text-xl mt-4">تحدي الحاضر، صناع المستقبل</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-6 px-6 py-2 rounded-xl bg-accent text-white"
      >
        ابدأ معنا
      </motion.button>
    </main>
  );
}