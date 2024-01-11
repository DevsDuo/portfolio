import * as S from "./styles.tsx"
import logo from "../../assets/minimalist_logo.png"

export function AboutUs() {
    return (
        <S.AboutContainer id="about-us">
            <S.AboutVertical>
                <S.PageTitle>SOBRE NÓS</S.PageTitle>
                <S.AboutHorizontal>
                    <div>
                        Em um universo digital em constante expansão, a Devs Duo emerge como um farol de inovação e autonomia no desenvolvimento de sistemas. Esta empresa singular é moldada pelas mentes criativas e empreendedoras de Arthur e Guilherme, uma dupla dinâmica decidida a deixar sua marca no cenário tecnológico.
                        <br/> <br/> Arthur e Guilherme, fundadores da Devs Duo, personificam a essência da colaboração. Combinando suas habilidades complementares e visões alinhadas, eles criaram uma empresa que não apenas desenvolve sistemas, mas também cultiva uma abordagem única e personalizada para cada projeto.
                        <br/> <br/> O nome "Devs Duo" não apenas encapsula a natureza colaborativa da empresa, mas também representa a expertise dual de Arthur e Guilherme. Juntos, eles formam uma equipe coesa capaz de enfrentar desafios complexos e entregar resultados de alta qualidade.
                    </div>
                    <img src={logo}/>
                </S.AboutHorizontal>
            </S.AboutVertical>
        </S.AboutContainer>
    )
}