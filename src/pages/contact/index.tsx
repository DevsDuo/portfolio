import React from 'react';
import * as S from "./styles"

import InstagramLogo from "../../assets/icons/instagram.svg"
import LinkedinIcon from "../../assets/icons/linkedin.svg"
import GithubIcon from "../../assets/icons/github.svg"
import EmailIcon from "../../assets/icons/email.svg"
import Button from '../../components/Button';

const Contact: React.FC = () => {

    function toggleRenderAll() {
        console.log("Enviado")
    }

  return (
    <S.ContactContainer id='contact'>
        <span>Contato</span>
        <S.BodyContact>
            <S.LeftContainer>
                <span>Fale Conosco</span>
                <S.FormContact>
                    <form action="">
                        <S.InputGroup>
                            <input type="text" required />
                            <label>Nome Completo</label>
                        </S.InputGroup>
                        <S.InputGroup>
                            <input type="text" required />
                            <label>Email ou Contato</label>
                        </S.InputGroup>
                        <S.InputGroup>
                            <input type='text' required />
                            <label>Escreva sua Mensagem</label>
                        </S.InputGroup>
                        <Button link={toggleRenderAll} text={'Enviar'}  />
                    </form>
                </S.FormContact>
            </S.LeftContainer>
            <S.RightContainer>
                <span>Redes Sociais</span>
                <S.SocialSection>
                    <a href='#'>
                        <S.SocialIcon src={InstagramLogo} />
                    </a>
                    <span>Instagram</span>
                </S.SocialSection>
                <S.SocialSection>
                    <a href='#'>
                        <S.SocialIcon src={LinkedinIcon} />
                    </a>
                    <span>Linkedin</span>
                </S.SocialSection>
                <S.SocialSection>
                    <a href='#'>
                        <S.SocialIcon src={GithubIcon} />
                    </a>
                    <span>Github</span>
                </S.SocialSection>
                <S.SocialSection>
                    <a href='#'>
                        <S.SocialIcon src={EmailIcon} />
                    </a>
                    <span>devsduo.contato@gmail.com</span>
                </S.SocialSection>
            </S.RightContainer>
        </S.BodyContact>
    </S.ContactContainer>
  );
}

export default Contact;