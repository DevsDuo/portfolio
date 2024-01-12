import React from 'react';
import * as S from "./styles";

import { IoMoon } from "react-icons/io5";

import LogoHeader from "../../assets/logo-simp.png"
import LogoHeaderHover from "../../assets/logo-principal.png"

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.LeftHeader>
        <a href='#'>
          <S.LogoHeader>
            <img src={LogoHeaderHover} />
          </S.LogoHeader>
          <S.LogoHeaderHover>
            <img src={LogoHeader} />
          </S.LogoHeaderHover>
        </a>
      </S.LeftHeader>
      <S.RightHeader>
        <S.MenuHeader>
          <a href='#home' className='active'>Home</a>
          <a href='#about-us'>Sobre Nós</a>
          <a href='#skills'>Habilidades</a>
          <a href='#projects'>Projetos</a>
          <a href='#contact'>Contato</a>
        </S.MenuHeader>
        <S.IconTheme>
          <a href='#'>
            <IoMoon />
          </a>
        </S.IconTheme>
      </S.RightHeader>
    </S.HeaderContainer>
  )
}

export default Header;