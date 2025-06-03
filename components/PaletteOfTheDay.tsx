import { motion } from "framer-motion";

const colorPalettes = [
  ["#1C1C1E", "#2C2C2E", "#3A3A3C", "#48484A", "#636366"],
  ["#F72585", "#B5179E", "#7209B7", "#3A0CA3", "#4361EE"],
  ["#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF"],
  ["#0F172A", "#1E293B", "#334155", "#475569", "#64748B"],
  ["#FDE68A", "#FCD34D", "#FBBF24", "#F59E0B", "#D97706"]
];


const palette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

export default function PaletteOfTheDay() {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 shadow-md rounded-xl p-6 my-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-4">🎨 Palette of the Day</h2>
      <div className="flex gap-4">
        {palette.map((color, idx) => (
          <div
            key={idx}
            className="w-14 h-14 rounded-lg shadow-inner border border-zinc-300 dark:border-zinc-700"
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>
      <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        {palette.join(" • ")}
      </div>
    </motion.div>
  );
}
