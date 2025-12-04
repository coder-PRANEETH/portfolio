import "./hero.css"
import "./background.css"

import human from "/human.jpg"
import blob from "/blob.svg"

import { useEffect,useState } from "react";

function getHeroSize() {
  const el = document.querySelector(".hero");
  if (!el) return { width: 0, height: 0 };

  return {
    width: el.clientWidth,
    height: el.clientHeight
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
  
  setCircles(randomcircle(10));

  
  const interval = setInterval(() => {
    setCircles(prev => [
      ...prev,
      ...randomcircle(10) 
    ]);
   


  }, 2000);

  return () => clearInterval(interval);
}, []);


  return (
    <>
      <div className="hero">
        
        <div id ="circle">
          {circles}
          </div>
          
        <div className="texts">
          <div className="text">
            <div className="hi">I'am Praveen</div>
            <div className="iam">Data Scientist</div>
            <div className="buttons">
              <button className="git">
                <a  target="_blank" rel="noopener noreferrer" href="https://www.google.com/url?sa=D&q=https://github.com/Praveen-M54&ust=1764769740000000&usg=AOvVaw3L72S8E_o47Ile1jcICOxF&hl=en" type="blank">   
                <span>Github</span></a> 
              </button>
              <button className=" link">
                <a  target="_blank" rel="noopener noreferrer" href="https://www.google.com/url?sa=D&q=https://www.linkedin.com/in/praveen-maheshwaran-277063225/&ust=1764769740000000&usg=AOvVaw0HiyR-bHbCofBV_W-7h3So&hl=en">  
                <span> Linkedn</span></a>
              </button>
            </div>
          </div>
        </div>

        <div className="img">
<div className="ima"></div>        </div>

        <div className="liner"></div>
      </div>
    </>
  );
}
