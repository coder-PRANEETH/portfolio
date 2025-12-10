import './skills.css'
import vite from '/vite.svg'
import HexagonalGrid from './hexagon'
import { motion } from 'framer-motion'

export default function Skill() {
  const skills = [
  {
    items: [
      "Languages",
      "Python",
      "SQL"
    ]
  },
  {
    items: [
      "AI",
      "GenAI",
      "RAG",
      "Multimodal RAG",
      "LangChain"
    ]
  },
  {
    items: [
      "ML/DL",
      "Random Forests",
      "XGBoost",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Keras"
    ]
  },
  {
    items: [
      "Cloud",
      "Bedrock",
      "AWS",
      "SageMaker"
    ]
  },
  {
    items: [
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Power BI",
      "MS Excel"
    ]
  },
  {
    items: [
      "Others",
      "Playwright",
      "BeautifulSoup",
      "Git",
      "GitHub",
      "FastAPI",
      "Poetry"
    ]
  }
];


 return<>
 <div className="skills">
<div className="fo">

<div className="i"><div className="f"> <HexagonalGrid items = {["Skills"]}/></div></div>
<div className="f"><div className="f"><HexagonalGrid items={skills[0].items} /></div></div>
<div className="fo"><HexagonalGrid items={skills[3].items} /></div>
<HexagonalGrid items={skills[1].items} />
<div className="fo"><HexagonalGrid  items={skills[4].items} /></div>
<div className="f"><HexagonalGrid items={skills[2].items} /></div>
<div className="fi"><HexagonalGrid items={skills[5].items} /></div>


</div>
 </div>
 </>
}
