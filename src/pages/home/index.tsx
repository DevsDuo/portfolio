import React from 'react';
import * as S from "./styles"

import LogoHome from "../../assets/logo_home.png"

const Home: React.FC = () => {
  return(
    <S.ContainerHome id='home'>
        <S.LogoHome src={LogoHome} />
        <S.TextsHome>
            <h1>Hello World</h1>
            <span>Sejam bem vindos, somos a <S.DevsDuoHome>Devs Duo</S.DevsDuoHome>!</span>
        </S.TextsHome>
    </S.ContainerHome>
  );
}

export default Home;