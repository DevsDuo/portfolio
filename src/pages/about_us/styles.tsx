import styled from "styled-components";

export const AboutContainer = styled.section`
    padding: 3.1rem;
    padding-left: 7.5rem;
    padding-right:3.5rem;
`

export const AboutVertical = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:3rem;


`
export const PageTitle = styled.div`
    color: #939;
        font-family: Poppins;
        font-size: 22px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
`

export const AboutHorizontal = styled.div`
    display:flex;

    div {
        color: #F1F1F1;
        font-family: Inter;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top:3.5rem;
        line-height:25px;
    }

    img {
        width:30rem;
        height:30.5rem;
    }
`