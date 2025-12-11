import "./hero.css"
import "./background.css"
import git from '/git.png'
import lin from '/link.png'

import { useEffect,useState } from "react";

function getHeroSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

function randomArray(count, max) {
  return Array.from({ length: count }, () =>
    Math.floor(Math.random() * max)
  );
}

const randomise = (count) => {
  const { width, height } = getHeroSize();
  const xs = randomArray(count, width);
  const ys = randomArray(count, height);

  const lis = () => {
    const elements = [];
    for (let i = 0; i < count; i++) {
      elements.push([xs[i], ys[i]]);
    }
    return elements;
  };

  return lis();   
};

function randomcircle(count) {

  const loca = randomise(count);

  const elements = loca.map(([x, y], index) => {
    return (
      <div
        
        className={`cir cir${index+1}`}
        style={{ position: "absolute", left: `${x}px`, top: `${y}px` }}
      ></div>
    );
  });

  return elements;
}

export default function Hero() {

  const [circles, setCircles] = useState([]);

useEffect(() => {
  function getConfig() {
    const width = window.innerWidth;
    return width > 1000
      ? { count: 12, interval: 2000 }
      : { count: 7, interval: 3000 };
  }

  const { count, interval } = getConfig();


  setCircles(randomcircle(count));


  const id = setInterval(() => {
    setCircles(prev => [...prev, ...randomcircle(count)]);
  }, interval);


  return () => clearInterval(id);
}, []);



  return (
    <>
      <div className="hero">
        
        <div id ="circle">
          {circles}
          </div>
          
          <div className="text">
            <div className="hi">I'am Praveen</div>
            <div className="iam">Data Scientist</div>
            <div className="buttons">
              <button className="git">
                <a  target="_blank" rel="noopener noreferrer" href="https://www.google.com/url?sa=D&q=https://github.com/Praveen-M54&ust=1764769740000000&usg=AOvVaw3L72S8E_o47Ile1jcICOxF&hl=en" type="blank">   
                <img src={git} alt="" /><span>Github</span></a> 
              </button>
              <button className=" link">
                <a  target="_blank" rel="noopener noreferrer" href="https://www.google.com/url?sa=D&q=https://www.linkedin.com/in/praveen-maheshwaran-277063225/&ust=1764769740000000&usg=AOvVaw0HiyR-bHbCofBV_W-7h3So&hl=en">  
               <img src={lin} alt="" /> <span> Linkedn</span></a>
              </button>
            </div>
          
        </div>

        
<img className="img" src="human.jpg" alt="" />     </div>

        <div className="liner"></div>
    
    </>
  );
}
