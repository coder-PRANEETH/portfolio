import './experience.css'
import vite from '/vite.svg'
import { motion } from 'framer-motion'

export default function Exper() {
  return (
    <div className="experi">
      <h1>Experiences</h1>

      <div className="celine"></div>

      <section>

        {/* ---------- Experience 1 ---------- */}
        <div className="wda">
          <div className="fullex">

            <div className="expan">
              <div className="des">

                <div className="logo">
                  <img src={vite} alt="" />
                  <h5>ByteIQ Analytics</h5>
                </div>

                <ul className="desc">
                  <li><strong>Data Science Intern — Jan 2025 to Now</strong></li>
                  <li>Led a team of 3 to build a hybrid ETL pipeline using BeautifulSoup, Playwright, and selective LangChain usage.</li>
                  <li>Extracted structured company data from PDFs & websites, improving analytics accuracy.</li>
                  <li>Implemented asynchronous processing, reducing extraction time by 30%.</li>
                  <li>Automated data cleaning & transformation for reliable analytics-ready datasets.</li>
                </ul>

              </div>
            </div>

            <div className="conl"></div>

            <div className="endl">
              <div className="end1"></div>
              <img src={vite} alt="" />
              <div className="end2"></div>
            </div>

          </div>

          <div className="dat"></div>
        </div>

        {/* ---------- Experience 2 ---------- */}
        <div className="wda">

          <div className="dat"></div>

          <div className="fullex right">

            <div className="endl">
              <div className="end1"></div>
              <img src={vite} alt="" />
              <div className="end2"></div>
            </div>

            <div className="conl"></div>

            <div className="expan">
              <div className="des">

                <div className="logo">
                  <img src={vite} alt="" />
                  <h5>IIT Ropar (Summer Research)</h5>
                </div>

                <ul className="desc">
                  <li><strong>Summer Research Intern — May to July 2024</strong></li>
                  <li>Implemented U-Net segmentation for multimodal brain tumor MRI images.</li>
                  <li>Achieved a 15% higher Dice score compared to baseline segmentation.</li>
                  <li>Expanded dataset 3–5× using augmentation to increase robustness.</li>
                </ul>

              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}
