import "./about.css";
import { motion } from "framer-motion";

const about = "AI Engineer with experience in multimodal RAG, data pipelines, deep learning, and medical image analysis. I build scalable AI systems using Python, LangChain, TensorFlow, PyTorch, and AWS. Passionate about combining data, automation, and machine learning to solve real-world problems.AI Engineer with experience in multimodal RAG, data pipelines, deep learning, and medical image analysis. I build scalable AI systems using Python, LangChain, TensorFlow, PyTorch, and AWS. Passionate about combining data, automation, and machine learning to solve real-world problems.";

export default function About() {
  return (
    <motion.div 
      className="about"
      id="about"
      initial={{ opacity: 1 }}
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
