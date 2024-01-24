import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 200px 80px;
    background: linear-gradient(155deg, #330036 12.91%, #550F56 25.43%, #761F75 49.77%, #151515 49.87%, #151515 80.16%);
    scroll-margin-top: 130px;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column-reverse;   
        text-align: center;
        background: #151515;
    }

    @media (max-width: 1024px) {
          padding-bottom:30px;
      }

    
`;

export const LogoHome = styled.img`
  margin-left: -25px;
  

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LogoHomeResponsive = styled.img`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 450px) {
        width:400px;
      }
`;

export const HelloWorldText = styled.div`
    position: relative;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 80px;
    color: #939;
    cursor: pointer;
    filter: drop-shadow(0 0 10px #939); 

    @media (max-width: 1024px) {
       font-size: 20px;
       text-align: center;
       filter: drop-shadow(0 0 10px #939); 
    }
`;

export const TextsHome = styled.div`
    display: flex;
    flex-direction: column;
    margin-right:10px;

    > span {
        text-align: right;
        font-size: 20px;
    }

    
    @media (max-width: 1024px) {
        > span {
            font-size: 18px;
            text-align: center;
        }
    }
`;

export const DevsDuoHome = styled.span`
    color: #939;
    font-weight: 600;
`;