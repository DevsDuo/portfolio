
import * as S from "./styles"
import { skillsText } from '../../pages/skills/skillsText';

interface card {
  ind:number;
}


function Card(props:card) {
  return (
    <S.CardContainer>  
      <S.LangImg image={props.ind == 5 ? '250px' : '120px'} src={skillsText[props.ind].img}/>
      <S.LangTitle>{skillsText[props.ind].lang}</S.LangTitle>
      <S.LangTxt>{skillsText[props.ind].txt}</S.LangTxt>
    </S.CardContainer>
  );
}

export default Card;