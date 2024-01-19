import React, { useState } from 'react';
import * as S from "./styles";

import { IoMoon } from "react-icons/io5";

import LogoHeader from "../../assets/logo-simp.png"
import LogoHeaderHover from "../../assets/logo-principal.png"

const Header: React.FC = () => {
  
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleLinkClick = (clickedIndex: number) => {
    setActiveLink(clickedIndex);
  };
  
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
          <a 
            href='#home' 
            className={activeLink === 0 ? "active" : ""} 
            onClick={() => handleLinkClick(0)}
          >
              Home
          </a>
          <a 
            href='#about-us' 
            className={activeLink === 1 ? "active" : ""} 
            onClick={() => handleLinkClick(1)}
          >
            Sobre Nós
          </a>
          <a 
            href='#skills' 
            className={activeLink === 2 ? "active" : ""} 
            onClick={() => handleLinkClick(2)}
          >
            Habilidades
          </a>
          <a 
            href='#projects' 
            className={activeLink === 3 ? "active" : ""} 
            onClick={() => handleLinkClick(3)}
          >
            Projetos
          </a>
          <a 
            href='#contact' 
            className={activeLink === 4 ? "active" : ""} 
            onClick={() => handleLinkClick(4)}
          >
            Contato
          </a>
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