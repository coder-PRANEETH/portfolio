import './skills.css'
import vite from '/vite.svg'
import { motion } from 'framer-motion'

export default function Skill() {

  const parentVariant = {
    hidden: {},
    visible: {}
  };

  const skillDesVariant = {
  hidden: { opacity: 0, scale: 0.5 },

  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      delay: i * 0.3,   // index-based delay
      
    }
  })
};


  const sections = [
    ["Programming Languages", ["Python", "SQL"]],
    ["AI", ["GenAI", "RAG", "Multimodal RAG", "LangChain", "Vector Databases"]],
    ["ML / DL", ["Random Forests", "XGBoost", "Scikit-learn", "PyTorch", "TensorFlow", "Keras"]],
    ["Cloud", ["Bedrock", "AWS", "SageMaker"]],
    ["Data Analysis", ["Pandas", "NumPy", "Matplotlib", "Power BI", "MS Excel"]],
    ["Others", ["Playwright", "BeautifulSoup", "Git", "GitHub", "FastAPI", "Poetry"]]
  ];

  return (
    <>
      <motion.div
        className="skills"
        variants={parentVariant}   // REQUIRED
        initial="hidden"           // Start hidden
        whileInView="visible"      // Animate to visible
        viewport={{ once: true, amount: 0.8 }}
      >
        <h3>Skills</h3>

        <div className="fullcon">

          {sections.map(([title, items], rowIndex) => (
           <div className="skilldes">
              <div className="skillname">{title}</div>

              <div className="carcon">
                {items.map((skill,index) => (
                   <motion.div
              
                 initial="hidden"           // Start hidden
        whileInView="visible" 
        viewport={{ once: true}} 
        ease="linear"    // Animate to visible
             key={skill} className="car"
              variants={skillDesVariant}  // child variant
            >

               
                    <img src={vite} alt="" />
                    <h4>{skill}</h4>
                 
                </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </motion.div>
    </>
  );
}
