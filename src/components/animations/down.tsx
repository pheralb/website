import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";

type DownProps = {
  children: ReactNode;
  delay?: number;
};

const Down: FC<DownProps> = ({ children, delay }) => (
  <motion.div
    initial={{ y: -6, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.5,
      delay: delay || 0,
    }}
  >
    {children}
  </motion.div>
);

export default Down;