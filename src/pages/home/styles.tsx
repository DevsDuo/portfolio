import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 100px 80px;
    background: linear-gradient(155deg, #330036 12.91%, #550F56 25.43%, #761F75 49.77%, #151515 49.87%, #151515 80.16%);
`;

export const LogoHome = styled.img`
    margin-left:-80px;
`;

export const HelloWorldText = styled.div`
    position: relative;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 80px;
    cursor: pointer;

    > .text {
        color: transparent;
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
    }

    > .hover-text {
        position: absolute;
        inset: 0;
        width: 0%;
        color: #939;
        overflow: hidden;
        border-right: 6px solid #939;
        transition: 0.5s ease-in-out;
    }

    > .hover-text:hover {
        width: 100%;
        filter: drop-shadow(0 0 40px #939);
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