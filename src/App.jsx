import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-400 to-indigo-600 p-6">
      
      {/* Animated Logo Section */}
      <motion.div 
        className="flex gap-8 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.a href="https://vite.dev" target="_blank" whileHover={{ scale: 1.2, rotate: 10 }}>
          <img src={viteLogo} className="w-20 drop-shadow-lg" alt="Vite logo" />
        </motion.a>

        <motion.a href="https://react.dev" target="_blank" whileHover={{ scale: 1.2, rotate: -10 }}>
          <img src={reactLogo} className="w-20 drop-shadow-lg" alt="React logo" />
        </motion.a>
      </motion.div>

      {/* Name Header */}
      <motion.h1 
        className="text-5xl font-extrabold text-white mb-4 drop-shadow-xl tracking-wide"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        Anshida ✨
      </motion.h1>

      {/* Card Section */}
      <motion.div 
        className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        
        {/* Count Button */}
        <motion.button
          className="w-full py-3 text-xl font-semibold text-purple-700 bg-white rounded-xl shadow-lg"
          onClick={() => setCount(count + 1)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          Count is {count} 🚀
        </motion.button>

        {/* Instruction Text */}
        <p className="text-center text-white mt-5 font-medium">
          Edit <span className="text-yellow-200 bg-black/30 px-2 py-1 rounded"><code>src/App.jsx</code></span> and save to test HMR
        </p>
      </motion.div>

      {/* Footer Text */}
      <motion.p 
        className="text-white/90 mt-6 text-lg text-center max-w-lg font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Click the Vite and React logos to learn more 💡
      </motion.p>
    </div>
  );
}

export default App;
