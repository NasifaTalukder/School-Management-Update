import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations

const VisitorCount = () => {
  const [today, setToday] = useState(0);
  const [total, setTotal] = useState(0);
  const [yesterday, setYesterday] = useState(0);
  const [last7Days, setLast7Days] = useState(0);

  useEffect(() => {
    const randomToday = Math.floor(Math.random() * 200) + 50;
    const randomYesterday = Math.floor(Math.random() * 150) + 30;
    const randomLast7Days = Math.floor(Math.random() * 1000) + 300;
    const randomTotal = Math.floor(Math.random() * 50000) + 10000;

    setToday(randomToday);
    setYesterday(randomYesterday);
    setLast7Days(randomLast7Days);
    setTotal(randomTotal);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-lg mt-[-50px] shadow-xl">
      <h2 className="text-2xl font-bold text-white text-center mb-4">Visitor Counter</h2>

      <div className="flex flex-col space-y-4">
        {/* Today */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg text-center text-blue-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg font-semibold">Today</h3>
          <p className="text-2xl font-bold">{today}</p>
        </motion.div>

        {/* Yesterday */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg text-center text-green-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg font-semibold">Yesterday</h3>
          <p className="text-2xl font-bold">{yesterday}</p>
        </motion.div>

        {/* Last 7 Days */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg text-center text-yellow-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg font-semibold">Last 7 Days</h3>
          <p className="text-2xl font-bold">{last7Days}</p>
        </motion.div>

        {/* Total */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg text-center text-purple-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg font-semibold">Total</h3>
          <p className="text-2xl font-bold">{total}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default VisitorCount;
