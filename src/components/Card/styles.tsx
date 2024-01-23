import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 32rem;
    height: 32rem;
    padding:2rem;
    border-radius: 35px;
    background: linear-gradient(200deg, #761F75 0%, #330036 100%);
    transition: all 250ms;

    &:hover {
        box-shadow: 0 0 20px #6d0a6d;
    }
`;

export const LangTitle = styled.div`
    margin:1rem;
    font-size:1.3rem;
    font-weight:bold;
`

interface LangImg {
    image:string;
}

export const LangImg = styled.img<LangImg>`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: ${props => props.image}

`

export const LangTxt = styled.div`
    text-align: center;
`