import * as S from "./styles.tsx"
import logo from "./assets/minimalist_logo.png"

export function AboutUs() {
    return (
        <S.AboutContainer id="about-us">
            <S.AboutVertical>
                <S.PageTitle>SOBRE NÓS</S.PageTitle>
                <S.AboutHorizontal>
                    <div>Esse Texto Tava na fonte INTER, mas n sei oq era pra fazer entao nao mudei pra poppins, deixei assim <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.
                    <br /><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <img src={logo}/>
                </S.AboutHorizontal>
            </S.AboutVertical>
        </S.AboutContainer>
    )
}