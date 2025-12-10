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
          <motion.div
            className="fullex"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="expan">
              <div className="des">
                <div className="logo">
                  <img src={vite} alt="" />
                  <h5>ByteQl</h5>
                </div>

                <ul className="desc">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque ullam aut velit rem, eveniet mollitia,</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit delectus, eum enim soluta maiores sit ipsam quae? Laboriosam vol</li>
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
           <div className="te dat"><span>
             May 2024 - Present
            </span>
             </div>
        </div>

        {/* ---------- Experience 2 ---------- */}
        <div className="wda">
          <div className="dat"><span>
             May 2024 - Present
            </span>
             </div>

          <motion.div
            className="fullex right"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true,amount:0.3 }}
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
                  <img src={vite} alt="" />
                  <h5>ByteQl</h5>
                </div>

                <ul className="desc">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque ullam aut velit rem, eveniet mollitia,</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit delectus, eum enim soluta maiores sit ipsam quae? Laboriosam vol</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>

      </section>
    </div>
  )
}
