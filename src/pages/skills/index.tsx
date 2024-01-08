import React from 'react';
import * as S from "./styles"

import HtmlIcon from "../../assets/icons/html.svg"
import CssIcon from "../../assets/icons/css.svg"
import JsIcon from "../../assets/icons/js.svg"
import ReactIcon from "../../assets/icons/react.svg"

import Card from '../../components/Card';

const Skills: React.FC = () => {
  return (
    <S.ContainerSkills id='skills'>
        <span>Habilidades</span>
        <S.SkillsIcons>
            <S.Icon src={HtmlIcon} />
            <S.Icon src={CssIcon} />
            <S.Icon src={JsIcon} />
            <S.Icon src={ReactIcon} />
        </S.SkillsIcons>
        <Card />
    </S.ContainerSkills>
  );
}

export default Skills;