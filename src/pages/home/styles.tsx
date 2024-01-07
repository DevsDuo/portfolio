import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 100px 80px;
`;

export const LogoHome = styled.img``;

export const TextsHome = styled.div`
    display: flex;
    flex-direction: column;

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