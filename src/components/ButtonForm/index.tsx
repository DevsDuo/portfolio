
import * as S from "./styles"

interface LinkButton {
  text:string;
}

function Button(props:LinkButton) {
  return(
    <S.ContainerButton type="submit">
        {props.text}
    </S.ContainerButton>
  );
}

export default Button;