import React, { useState } from 'react';
import * as S from "./styles";

import LogoHeader from "../../assets/logo-simp.png"
import LogoHeaderHover from "../../assets/logo-principal.png"

import { IoMdMenu } from "react-icons/io";

const Header: React.FC = () => {
  
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleLinkClick = (clickedIndex: number) => {
    setActiveLink(clickedIndex);
  };
  
  const [visibleMenu, setVisibleMenu] = useState('none');

  function setMenuVisibility() {
    if (visibleMenu == 'none') {
      setVisibleMenu('flex')
    } else {
      setVisibleMenu('none')
    }
  }


function handleMenuClosing(index:number) {
  setMenuVisibility()
  handleLinkClick(index)
}


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
        <S.HiddenMenuButton onClick={setMenuVisibility}>
          <IoMdMenu />
        </S.HiddenMenuButton>
        <S.HiddenMenuHeader visibility={visibleMenu}>
          <a 
              href='#home' 
              className={activeLink === 0 ? "active" : ""} 
              onClick={() => handleMenuClosing(0)}
            >
                Home
            </a>
            <a 
              href='#about-us' 
              className={activeLink === 1 ? "active" : ""} 
              onClick={() => handleMenuClosing(1)}
            >
              Sobre Nós
            </a>
            <a 
              href='#skills' 
              className={activeLink === 2 ? "active" : ""} 
              onClick={() => handleMenuClosing(2)}
            >
              Habilidades
            </a>
            <a 
              href='#projects' 
              className={activeLink === 3 ? "active" : ""} 
              onClick={() => handleMenuClosing(3)}
            >
              Projetos
            </a>
            <a 
              href='#contact' 
              className={activeLink === 4 ? "active" : ""} 
              onClick={() => handleMenuClosing(4)}
            >
              Contato
            </a>
        </S.HiddenMenuHeader>
      </S.RightHeader>
    </S.HeaderContainer>
  )
}

export default Header;