import styled from "styled-components";

export const ContainerButton = styled.a`
    text-decoration:none;
    font-family:poppins;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 220px;
    height: 60px;
    background: rgb(51,0,54);
    background: linear-gradient(90deg, rgba(51,0,54,1) 0%, rgba(118,31,117,1) 100%);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.2s;
    color: #fff;
        font-size: 17px;
        font-weight: 700;
        z-index: 1;
        text-transform: uppercase;

    &:hover {
        box-shadow: 0 0 20px #4d124d;
        transform:scale(1.05)
    }

    
`;