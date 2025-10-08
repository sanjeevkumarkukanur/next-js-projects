'use client';
import { motion } from 'framer-motion';

export default function HomeClient({ translations }: { translations: any }) {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen font-sans">
      {/* Session 1: Hero */}
      <section className="px-6 py-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-white">
            {translations.heroLines.map((line: string, idx: number) => (
               <span key={idx} className="block">{line}</span>
            ))}
            <span className="text-purple-600">{translations.heroHighlight}</span>
          </h1>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1, type: "spring" }}
          className="flex-1 flex justify-center"
        >
          <img
            src="https://hginfotech.io/wp-content/uploads/2025/07/Co-innovation-model.png"
            alt="Teamwork and Solution"
            className="max-w-md w-full"
          />
        </motion.div>
      </section>
       <section className="px-6 py-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-6 justify-center text-center mt-14"
        >
          {translations.stats.map((stat: { number: string; label: string }, idx: number) => (
            <div key={idx} className="bg-gray-900 text-purple-400 p-8 rounded-lg w-48">
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="mt-2 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Session 2: About */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <h2 className="font-bold text-xl mb-2">{translations.aboutIntro}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300 mb-3">
              {translations.aboutDetails.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700 dark:text-gray-200 mt-2">{translations.aboutClosing}</p>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="flex justify-center"
          >
            <img
              src="https://hginfotech.io/wp-content/uploads/2025/05/person-front-computer-working-html.jpg"
              alt="Developer Working"
              className="rounded-lg shadow-lg max-w-md w-full"
            />
          </motion.div>
        </div>

        {/* Service cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto"
        >
          {translations.services.map((service: { title: string; description: string }, idx: number) => (
            <div key={idx} className="border-l-4 border-purple-600 pl-6">
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-200">{service.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        
      </section>
    </main>
  );
}
