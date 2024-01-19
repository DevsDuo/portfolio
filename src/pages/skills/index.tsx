import React, { useState } from 'react';
import * as S from "./styles"


import HtmlIcon from "../../assets/icons/html.svg"
import CssIcon from "../../assets/icons/css.svg"
import JsIcon from "../../assets/icons/js.svg"
import ReactIcon from "../../assets/icons/react.svg"

import Card from '../../components/Card';

const Skills: React.FC = () => {

  const [index, setIndex] = useState(0);


  return (
    <S.ContainerSkills id='skills'>
        <span>Habilidades</span>
        <S.SkillsIcons>
            <S.Icon src={HtmlIcon} onClick={() => setIndex(0)}/>
            <S.Icon src={CssIcon} onClick={() => setIndex(1)}/>
            <S.Icon src={JsIcon} onClick={() => setIndex(2)}/>
            <S.Icon src={ReactIcon} onClick={() => setIndex(3)}/>
        </S.SkillsIcons>
        <Card ind={index}/>
    </S.ContainerSkills>
  );
}

export default Skills;