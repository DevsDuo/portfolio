import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 220px 80px;
    background: linear-gradient(155deg, #330036 12.91%, #550F56 25.43%, #761F75 49.77%, #151515 49.87%, #151515 80.16%);
    scroll-margin-top: 130px;
`;

export const LogoHome = styled.img`
  margin-left: -25px;
`;

export const HelloWorldText = styled.div`
    position: relative;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 80px;
    color: #939;
    cursor: pointer;

    &:hover {
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
`;

export const DevsDuoHome = styled.span`
    color: #939;
    font-weight: 600;
`;