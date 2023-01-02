import { motion } from "framer-motion";

interface RoutingProps {
  children: React.ReactNode;
}

const Routing = (props: RoutingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      transition={{ duration: 0.3 }}
    >
      {props.children}
    </motion.div>
  );
};

export default Routing;
