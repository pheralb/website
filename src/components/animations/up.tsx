import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";

type UpProps = {
  children: ReactNode;
  delay?: number;
};

const Up: FC<UpProps> = ({ children, delay }) => (
  <motion.div
    initial={{ y: 12, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.5,
      delay: delay || 0,
    }}
  >
    {children}
  </motion.div>
);

export default Up;
