import "./contact.css";

// React Icons
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div id="contact" className="contact">
        <h3>Contact me :</h3>

        <div className="info">

          <div className="gmail">
            <MdEmail size={28} className="icon" />
            <span>praveensw258@gmail.com</span>
          </div>

          <div className="phone">
            <FiPhone size={28} className="icon" />
            <span>6385660095</span>
          </div>

          <div className="linke">
            <FaLinkedin size={28} className="icon" />
            <span>LinkedIn</span>
          </div>

          <div className="insta">
            <FaInstagram size={28} className="icon" />
            <span>@praveensw258</span>
          </div>

        </div>
      </div>
    </>
  );
}
