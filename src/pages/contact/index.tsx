import React from 'react';
import * as S from "./styles"

import InstagramLogo from "../../assets/icons/instagram.svg"
import LinkedinIcon from "../../assets/icons/linkedin.svg"
import GithubIcon from "../../assets/icons/github.svg"
import EmailIcon from "../../assets/icons/email.svg"
import ButtonForm from '../../components/ButtonForm';

const Contact: React.FC = () => {
  return (
    <S.ContactContainer id='contact'>
        <span>Contato</span>
        <S.BodyContact>
            <S.LeftContainer>
                <span>Fale Conosco</span>
                <S.FormContact>
                    <form name="contact" method="POST" >
                    <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="form-name" value="contact" />
                        <S.InputGroup>
                            <input type="text" name='contact-name' required />
                            <label>Nome Completo</label>
                        </S.InputGroup>
                        <S.InputGroup>
                            <input type="text" name="contact-email" required />
                            <label>Email ou Contato</label>
                        </S.InputGroup>
                        <S.InputGroup>
                            <input type='text' name="contact-msg" required />
                            <label>Escreva sua Mensagem</label>
                        </S.InputGroup>
                        <ButtonForm text={'Enviar Formulário'}  />
                    </form>
                </S.FormContact>
            </S.LeftContainer>
            <S.RightContainer>
                <span>Redes Sociais</span>
                <S.ImgsContainer>
                <S.SocialSection>
                    <a href='#'>
                        <S.SocialIcon src={InstagramLogo} />
                    </a>
                    <span>Instagram</span>
                </S.SocialSection>
                <S.SocialSection>
                    <a target='_blank'>
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
                </S.ImgsContainer>
            </S.RightContainer>
        </S.BodyContact>
    </S.ContactContainer>
  );
}

export default Contact;