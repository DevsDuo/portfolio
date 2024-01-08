import styled from "styled-components";

export const ContainerSkills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;

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
    margin-bottom: 70px;
`;

export const Icon = styled.img`
    width: 80px;
    height: 85px;
`;