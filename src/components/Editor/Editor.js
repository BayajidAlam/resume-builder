import React, { useState } from "react";
import InputControl from "../InputControl/InputControl";
import styles from "./Editor.module.css";

function Editor({ sections }) {
  const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);

  const workExpBody = (
    <div className={styles.details}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg.frontend developer"
        ></InputControl>
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
        ></InputControl>
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
        ></InputControl>
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
        ></InputControl>
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
        ></InputControl>
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
        ></InputControl>
      </div>
      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl placeholder="Line 1"></InputControl>
        <InputControl placeholder="Line 2"></InputControl>
        <InputControl placeholder="Line 3"></InputControl>
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.details}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter your title cg. web app"
        ></InputControl>
        <InputControl
          label="Overview"
          placeholder="Enter basic overview of project"
        ></InputControl>
      </div>
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter Deploy link of project"
        ></InputControl>
        <InputControl
          label="Github"
          placeholder="Enter Github link of project"
        ></InputControl>
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl placeholder="Line 1"></InputControl>
        <InputControl placeholder="Line 2"></InputControl>
        <InputControl placeholder="Line 3"></InputControl>
        <InputControl placeholder="Line 4"></InputControl>
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.details}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title cg. B-tech"
        ></InputControl>
        <InputControl
          label="College/School Name"
          placeholder="Enter Name of your school college"
        ></InputControl>
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
        ></InputControl>
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
        ></InputControl>
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={styles.details}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Aashu"
        ></InputControl>
        <InputControl
          label="Title"
          placeholder="Enter your title eg. frontend developer"
        ></InputControl>
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
        ></InputControl>
        <InputControl
          label="Github Link"
          placeholder="Enter your github profile link"
        ></InputControl>
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          placeholder="Enter your email"
        ></InputControl>
        <InputControl
          label="Phone"
          placeholder="Enter your Phone"
        ></InputControl>
      </div>
    </div>
  );

  const acheivementsBody = (
    <div className={styles.details}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl placeholder="Line 1"></InputControl>
        <InputControl placeholder="Line 2"></InputControl>
        <InputControl placeholder="Line 3"></InputControl>
        <InputControl placeholder="Line 4"></InputControl>
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.details}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
      ></InputControl>
    </div>
  );

  const othersBody = (
    <div className={styles.details}>
      <InputControl label="Others" placeholder="Enter something"></InputControl>
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSection]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return acheivementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return othersBody;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSection === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSection(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl label="Title" placeholder="Enter section title" />
        {
          generateBody()
        }
      </div>
    </div>
  );
}

export default Editor;
