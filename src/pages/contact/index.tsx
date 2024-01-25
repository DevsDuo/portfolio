import React from 'react';
import * as S from "./styles"

import ButtonForm from '../../components/ButtonForm';

import { FaInstagram, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

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
                        <a href='#' target='_blank'>
                            <FaWhatsapp  />
                        </a>
                        <span>Whatsapp</span>
                    </S.SocialSection>
                    <S.SocialSection>
                        <a href="https://www.instagram.com/devs.duo/" target='_blank'>
                            <FaInstagram  />
                        </a>
                        <span>Instagram</span>
                    </S.SocialSection>
                    <S.SocialSection>
                        <a href="www.linkedin.com/company/devs-duo/" target='_blank'>
                            <FaLinkedinIn  />
                        </a>
                        <span>Linkedin</span>
                    </S.SocialSection>
                    <S.SocialSection>
                        <a href="https://github.com/DevsDuo" target='_blank'>
                            <FiGithub />
                        </a>
                        <span>Github</span>
                    </S.SocialSection>
                    <S.SocialSection>
                        <a href='#' target='_blank'>
                            <SiGmail />
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