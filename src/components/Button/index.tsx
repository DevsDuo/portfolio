
import * as S from "./styles"

interface LinkButton {
  link: VoidFunction;
  text:string;
}

function Button(props:LinkButton) {
  return(
    <S.ContainerButton onClick={props.link}>
        {props.text}
    </S.ContainerButton>
  );
}

export default Button;