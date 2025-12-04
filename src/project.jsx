import "./project.css";
import { motion } from "framer-motion";
const projectList = [
  {
    title: "Multimodal Knowledge Assistant — Unstructured, Tesseract, LangChain, Gemini",
    link: "https://www.google.com/url?sa=D&q=https://www.linkedin.com/in/praveen-maheshwaran-277063225/&ust=1764769740000000&usg=AOvVaw0HiyR-bHbCofBV_W-7h3So&hl=en",   // put your actual icon path
    details: [
      "Developed a multimodal RAG system that improved answer relevance by 35% using unified embeddings for text, OCR images, and tables.",
" Executed scalable vector indexing with hybrid metadata filtering and optimized vector indexing to reduce retrieval latency by 40%, enabling fast and accurate multimodal content search."
    ]
  },

  {
    title: "Pneumonia Detection — TensorFlow, Keras",
    link: "github.com",
    details: [
      " Built a Pneumonia detection pipeline with chest X-ray images using a fine-tuned VGG16 convolutional neural network and achieved 98.08% accuracy.",
"Improved model performance through transfer learning techniques applied over 50 epochs leveraging pre-trained weights for effective feature extraction and faster convergence."
    ]
  }
];
export default function Projects() {
  return (
    <div className="project" id="projects">
      <h1>PROJECTS</h1>

      <ul className="projs">
        {projectList.map((proj, index) => (
          <motion.li
            key={index}
            className="pro"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6 }}
          >
            {/* LOGO + TITLE */}
            <aside>
              <span>{proj.title}</span>
            </aside>

            {/* DETAILS */}
            <div className="abme">
              <ul>
                {proj.details.map((line, i) => (
                  <li className="uli" key={i}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="li">

<a 
  className="viewpro" 
  href={proj.link} 
  target="_blank" 
  rel="noopener noreferrer"
>
  View
</a>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
