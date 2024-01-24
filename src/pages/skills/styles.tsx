import styled from "styled-components";

export const ContainerSkills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
    scroll-margin-top: 130px;

    > span {
        color: #943094;
        font-size: 24px;
        font-weight: 900;
        margin-bottom: 60px;
    }
`;

export const SkillsIcons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 50px;
    

    > svg {
        color: #862686;
        width: 90px;
        height: 90px;
        transition: all 250ms;
        margin:0.2rem;
    }

    > svg:hover {
        filter: drop-shadow(0px 0px 15px #611261); 
        transform:scale(1.2);
    }
    
    @media (max-width:768px) {
        flex-wrap:wrap;
        max-width:500px;
        justify-content:center;
    }
`;