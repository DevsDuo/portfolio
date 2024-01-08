import styled from "styled-components";

export const projectContainer = styled.div`
    padding: 0.5rem;
    margin: 0.7rem;
    width:23rem;
    flex-direction:column;
    align-items:center;
    display:flex;

`

export const projectPic = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    width:21rem;

    img {
        width: 21rem;
        border-radius: 35px 35px 0px 0px;
    }

    a {
        text-decoration:none;
        color: #EDEDED;
        text-align: center;
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: Poppins;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border-radius: 0px 0px 30px 30px;
        background: #282828;
        width:21rem;
        height:1.7rem;
        padding-top:0.5rem;
        padding-bottom:0.5rem;
        
    }
`

export const projectTitle = styled.div`
    color: #EDEDED;
    text-align: center;
    font-family: Poppins;
    font-size: 1.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top:1rem;
    margin-bottom:0rem;
`

export const technologies = styled.div`
    display:flex;
    justify-content:start;
    width:19rem;
    gap:0.6rem;

    svg {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    svg:last-of-type {
        margin-top:0.2rem;
    }
    
`

export const projectDesc = styled.div`
    color: #EDEDED;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing:0.3px;
    line-height: 1.5rem;
    text-align:center;
    margin-top:0.6rem;
    margin-bottom:4rem;
`

export const Wrapper = styled.div`
    display:inline-block;
    
`

