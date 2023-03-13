import React, { useState } from 'react'
import styles from './Editor.module.css';

function Editor({sections}) {

  const [ activeSection, setActiveSection ] = useState(Object.keys(sections)[0])
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map(key=><div className={`${styles.section} ${activeSection === key ?styles.active: ""}`}
        key={key}
        onClick={()=>setActiveSection(key)}
        >
          {sections[key]}
        </div>)}
      </div>
    </div>
  )
}

export default Editor