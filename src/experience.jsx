import './experience.css'
import vite from '/gem.png'
import vit from '/gm.png'
import vie from '/ge.png'
import { motion } from 'framer-motion'

export default function Exper() {
  return (
    <div className="experi">
      <h1>Experiences</h1>


      <section>

        {/* ---------- Experience 1 ---------- */}
        <div className="wda">
          <motion.div
            className="fullex"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true,amount:0.4 }}
          >
            <div className="expan">
              <div className="des">
                <div className="logo">
                  <img src={vie} alt="" />
                  <h5>ByteIQ Analytics</h5>
                </div>

                <ul className="desc">
                  <li><strong>Data Science Intern</strong></li>

                  <li>Tech stack: <b>BeautifulSoup, Playwright, LangChain</b></li>

                  <li>Led a team of 3 to develop a hybrid ETL pipeline combining web scraping and selective LangChain usage to extract structured company data from websites & PDFs.</li>

                  <li>Implemented asynchronous processing, reducing extraction time by <b>30%</b> and significantly improving throughput.</li>

                  <li>Automated data cleaning & transformation, ensuring high-quality, analytics-ready datasets.</li>
                </ul>
              </div>
            </div>

            <div className="conl"></div>

            <div className="endl">
              <div className="end1"></div>
              <img src={vite} alt="" />
              <div className="end2"></div>
            </div>
          </motion.div>

          <div className="te dat">
            <span>Jan 2025 – Present</span>
          </div>
        </div>

        {/* ---------- Experience 2 ---------- */}
        <div className="wda">
          <div className="dat ">
            <span>May 2024 – July 2024</span>
          </div>

          <motion.div
            className="fullex right"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="endl">
              <div className="end1"></div>
              <img src={vite} alt="" />
              <div className="end2"></div>
            </div>

            <div className="conl"></div>

            <div className="expan">
              <div className="des">
                <div className="logo">
                  <img src={vit} alt="" />
                  <h5>IIT Ropar – Summer Research Intern</h5>
                </div>

                <ul className="desc">
                  <li><strong>Summer Research Intern</strong></li>

                  <li>Tech stack: <b>U-Net, Data Augmentation</b></li>

                  <li>Implemented U-Net for segmentation of multimodal brain tumor MRI images, achieving a <b>15% higher Dice coefficient</b> than baseline models.</li>

                  <li>Expanded dataset size by <b>3–5×</b> using augmentation to improve the robustness and generalization of the segmentation model.</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>

      </section>

      <div className="sepi"></div>
    </div>
  )
}
