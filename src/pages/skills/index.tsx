import React, { useState } from 'react';
import * as S from "./styles"

import Card from '../../components/Card';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Skills: React.FC = () => {

  const [index, setIndex] = useState(0);


  return (
    <S.ContainerSkills id='skills'>
        <span>Habilidades</span>
        <S.SkillsIcons>
            <FaHtml5 onClick={() => setIndex(0)}/>
            <FaCss3Alt onClick={() => setIndex(1)}/>
            <RiJavascriptFill onClick={() => setIndex(2)}/>
            <FaReact onClick={() => setIndex(3)}/>
            <SiStyledcomponents />
            <BiLogoTypescript />
            <FaGitAlt />
            <FaGithub />
        </S.SkillsIcons>
        <Card ind={index}/>
    </S.ContainerSkills>
  );
}

export default Skills;