import React from 'react';
import * as S from "./styles"

import LogoHome from "../../assets/logo_home.png"

import { Typewriter } from 'react-simple-typewriter';

const Home: React.FC = () => {
  return(
    <S.ContainerHome id='home'>
        <S.LogoHome src={LogoHome} />
        <S.TextsHome>
            <S.HelloWorldText>
              <h1>
                <Typewriter 
                  words={['Olá Mundo!', 'Hello World!', 'Hola mundo!', 'Bonjour le monde!', 'Hallo Welt!', '你好世界!']} 
                  loop={10}
                  cursor
                  typeSpeed={100}
                />
              </h1>
            </S.HelloWorldText>
            <span>Sejam bem vindos, somos a <S.DevsDuoHome>Devs Duo</S.DevsDuoHome>!</span>
        </S.TextsHome>
    </S.ContainerHome>
  );
}

export default Home;