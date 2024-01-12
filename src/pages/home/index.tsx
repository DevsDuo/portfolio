import React from 'react';
import * as S from "./styles"

import LogoHome from "../../assets/logo_home.png"

const Home: React.FC = () => {
  return(
    <S.ContainerHome id='home'>
        <S.LogoHome src={LogoHome} />
        <S.TextsHome>
            <S.HelloWorldText>
              <h1 className='text'>&nbsp;Hello World</h1>
              <h1 className='hover-text'>&nbsp;Hello World</h1>
            </S.HelloWorldText>
            <span>Sejam bem vindos, somos a <S.DevsDuoHome>Devs Duo</S.DevsDuoHome>!</span>
        </S.TextsHome>
    </S.ContainerHome>
  );
}

export default Home;