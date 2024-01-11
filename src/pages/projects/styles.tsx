import styled from "styled-components";

interface HiddenContainerHeight {
    render: string
}

export const HiddenContainer = styled.div<HiddenContainerHeight>`
    display:flex;
    flex-wrap:wrap;
    align-items:start;
    max-height:${props => props.render} ;
    overflow:hidden;

    @media (max-width: 814px) {
        justify-content:center;
    }
`

export const CenterDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:start;
`

export const SectionCenter = styled.div`
    display: flex;
    justify-content:center;
    width:100%;
    
    section {
        max-width:1220px;
        @media (max-width: 1219px) {
            max-width:814px;
        }
        @media (max-width: 814px) {
            max-width:407px;
        }
    }
`
export const ProjectTitle = styled.div`
        color: #939;
        font-family: Poppins;
        font-size: 22px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        text-align:center;
        margin-top:2rem;
        margin-bottom:3rem;
`

export const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom:5rem;
`