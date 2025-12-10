import "./HexagonalGrid.css";

import { motion } from "framer-motion";

const Hexagon = ({ icon, position, isCenter = false }) => (
  <motion.div
    className={`hexagon ${position} ${isCenter ? "center" : ""}`}
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.9, ease: "linear" }}
    viewport={{ once: true, amount: 0.7 }}
  >
    <div className="hexagon-border" />
    <div className="hexagon-inner">
      <div className="hex-icon">{icon}</div>
    </div>
  </motion.div>
);



// Generate positions dynamically
function generatePositions(count) {
  const positions = [];

  if (count <= 0) return positions;

  // Center
  positions.push("hex-pos-center");

  // Fill remaining
  let leftIndex = 1;
  let rightIndex = 1;

  for (let i = 1; i < count; i++) {
    if (i % 2 === 1) {
      // odd index → left
      positions.push(`hex-pos-left-${leftIndex}`);
      leftIndex++;
    } else {
      // even index → right
      positions.push(`hex-pos-right-${rightIndex}`);
      rightIndex++;
    }
  }

  return positions;
}

export default function HexagonalGrid({ items }) {
  const positions = generatePositions(items.length);

  return (
    <div className={`${items[0]=="Skills"?"da":""} hexagonal-grid`}>
      <div className="hex-container">

        {items.map((icon, index) => (
          <Hexagon
            key={index}
            icon={icon}
            position={positions[index]}
            isCenter={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
