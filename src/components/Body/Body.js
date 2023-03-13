import React from "react";
import styles from "./Body.module.css";

function Body() {
  const colors = ["239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"]
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span 
            key={item}
            className={styles.color}
            style={{backgroundColor: item}}
            />
          ))}
        </div>
        <div><button>Dwonload</button></div>
      </div>
    </div>
  );
}

export default Body;
