import styled from "styled-components";

export const ContainerButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 200px;
    height: 60px;
    background: rgb(51,0,54);
    background: linear-gradient(90deg, rgba(51,0,54,1) 0%, rgba(118,31,117,1) 100%);
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        box-shadow: 0 0 30px #939;
    }

    > span {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        z-index: 1;
    }
`;