import "./about.css";
import { motion } from "framer-motion";

const about = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt consequuntur modi vitae cumque suscipit praesentium soluta molestiae dignissimos ratione debitis, tempora libero voluptate velit voluptates quibusdam asperiores dolores consectetur?";

export default function About() {
  return (
    <motion.div 
      className="about"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.aside
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <span>ABOUT ME</span>
      </motion.aside>

      <motion.div
        className="abme"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 1 }}
      >
        <span>
{about}        </span>
      </motion.div>
    </motion.div>
  );
}
