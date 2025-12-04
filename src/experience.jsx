import './experience.css'
import vite from '/vite.svg'
import { motion } from 'framer-motion'

export default function Exper() {
  return (
    <div className="experi">
      <h1>Experiences</h1>

      <section>
        <div className="exp">

          {/* First experience */}
          <motion.div
            className="con"
            initial={{ opacity: 0, scale: 0.9 }}   // grow instead of move
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 1 }}    // animate only when fully visible
          >
            <div className="logo">
              <img src={vite} alt="" />
              <div className="date">May - July 2024</div>
            </div>

            <div className="ex">
              <h3>Data Science Intern - ByteIQ Analytics</h3>
              <ul className="det">
                <li>Led a team of 3 to develop a hybrid ETL pipeline using web scraping alongside selective LangChain usage to extract and structure comprehensive company data from PDFs and websites, enhancing analytics accuracy and business insights.</li>
                <li>Implemented asynchronous processing to make the process faster, reducing data extraction time by 30% and improving overall efficiency.</li>
                <li>Automated data cleaning and transformation steps to ensure high-quality, structured datasets for accurate business analytics and reporting.</li>
              </ul>
            </div>
          </motion.div>

          {/* Second experience */}
          <motion.div
            className="con"
            initial={{ opacity: 0, scale: 0.9 }}   // same grow effect
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 1 }}
          >
            <div className="logo">
              <img src={vite} alt="" />
              <div className="date">Jan 2025 - Now</div>
            </div>

            <div className="ex">
              <h3>BSummer Research Intern - IIT Ropar</h3>
              <ul className="det">
                <li>Implemented U-Net architecture for accurate segmentation of multimodal brain tumor images, enabling precise delineation of tumor regions. Achieved a 15% higher Dice coefficient compared to the baseline.</li>
                <li>Expanded the dataset 3–5× through augmentation techniques to increase diversity and improve model robustness to unseen data.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
