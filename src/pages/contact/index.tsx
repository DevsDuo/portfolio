import React from 'react';
import * as S from "./styles"

import InstagramLogo from "../../assets/icons/instagram.svg"
import LinkedinIcon from "../../assets/icons/linkedin.svg"
import GithubIcon from "../../assets/icons/github.svg"
import EmailIcon from "../../assets/icons/email.svg"

const Contact: React.FC = () => {
  return (
    <S.ContactContainer>
        <span>Contato</span>
        <S.BodyContact>
            <S.LeftContainer>
                <span>Fale Conosco</span>
                <S.FormContact>
                    <input type='text' placeholder='Nome Completo' />
                    <input type='text' placeholder='Email ou Telefone' />
                    <textarea placeholder='Escreva sua Mensagem' />
                    <input type='submit' />
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