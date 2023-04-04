import React, { useState } from "react";
import { useParams } from "react-router-dom";

import SkillTreeComponent from "../skill-tree/skill-tree.component.jsx";
import "./skill-calculator.styles.scss";

import sorcererData from "../../data/sorcerer-test.json";

const SkillCalculator = () => {
  const { className } = useParams();
  const [allocatedPoints, setAllocatedPoints] = useState({});
  // const [activeSkills, setActiveSkills] = useState([]);
  const [skillTreeData, setSkillTreeData] = useState(sorcererData);

  // const handleSkillActivation = (skillId) => {
  //   setActiveSkills((prevActiveSkills) => {
  //     const isActive = prevActiveSkills.includes(skillId);
  //     if (isActive) {
  //       return prevActiveSkills.filter((id) => id !== skillId);
  //     } else {
  //       return [...prevActiveSkills, skillId];
  //     }
  //   });
  // };

  return (
    // <div>
    //   <h1>{className} Skill Tree</h1>
    //   <SkillTreeComponent />
    // </div>
    <div className="container">
      <div className="tree-header">
        <h1>{className} Skill Tree</h1>
      </div>
      <SkillTreeComponent
        skillData={skillTreeData}
        allocatedPoints={allocatedPoints}
        // activeSkills={activeSkills}
        // onSkillClick={handleSkillClick}
        // onSkillActivation={allocatePoint}
      />
    </div>
  );
};

export default SkillCalculator;
