// components/WaveBackground.jsx
import { motion } from "framer-motion";

const WaveBackground = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[-10] pointer-events-none">
      {/* Back wave */}
      <motion.svg
        viewBox="0 0 1440 320"
        className="w-full h-[270px]"
        preserveAspectRatio="none"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="#c2f7fe"
          d="M0,192L60,202.7C120,213,240,235,360,224C480,213,600,171,720,165.3C840,160,960,192,1080,181.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L0,320Z"
        />
      </motion.svg>

      {/* Front wave */}
      <motion.svg
        viewBox="0 0 1440 320"
        className="w-full h-[210px] -mt-[170px]"
        preserveAspectRatio="none"
        initial={{ y: 0 }}
        animate={{ y: [0, 17, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="#2be6ff"
          d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,186.7C840,181,960,203,1080,202.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L0,320Z"
        />
      </motion.svg>
    </div>
  );
};

export default WaveBackground;
