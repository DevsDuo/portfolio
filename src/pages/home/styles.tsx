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
    margin-left: -40px;
`;



export const TextsHome = styled.div`
    display: flex;
    flex-direction: column;
    margin-right:10px;

    > h1 {
        color: #939;
        font-size: 80px;
        font-weight: 600;
    }

    > span {
        text-align: right;
        font-size: 20px;
    }
`;

export const DevsDuoHome = styled.span`
    color: #939;
    font-weight: 600;
`;