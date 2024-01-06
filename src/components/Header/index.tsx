import React from 'react';
import * as S from "./styles";

import { IoMoon } from "react-icons/io5";

import Logo from "../../assets/logo.png"

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.LeftHeader>
        <a href='#'>
          <S.LogoHeader src={Logo} />
        </a>
      </S.LeftHeader>
      <S.RightHeader>
        <S.MenuHeader>
          <a href='#' target='_blank' className='active'>Home</a>
          <a href='#' target='_blank'>Sobre Nós</a>
          <a href='#' target='_blank'>Habilidades</a>
          <a href='#' target='_blank'>Projetos</a>
          <a href='#' target='_blank'>Contato</a>
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