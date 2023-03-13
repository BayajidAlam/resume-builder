import React from "react";
import styles from "./Body.module.css";
import { ArrowDown } from 'react-feather';
import Editor from "../Editor/Editor";

function Body() {

  const colors = ["239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"]
  const sections = {
    basicInfo: 'Basic Info',
    workExp: 'Work Experience',
    project: 'Projects',
    education: 'Education',
    achievement: 'Achievements',
    summary: 'Summary',
    other: 'other'
  }

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
        <div><button>Dwonload <ArrowDown/></button></div>
      </div>
      <div className={styles.main}>
            <Editor
            sections={sections}
            />
      </div>
    </div>
  );
}

export default Body;
