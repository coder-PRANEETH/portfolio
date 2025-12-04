import './nav.css'


export default function Nav(){
    return<>
        <div className="nav">
           <a  href="#about">
            <div className="navitem"><span>About</span></div>
           </a>
           
           <a  href="#projects">
            <div className="navitem"><span>Project</span></div>
           </a>
           
           <a  href="#contact">
            <div className="navitem"><span>Contact</span></div>
           </a>
           


        </div>
    </>
}