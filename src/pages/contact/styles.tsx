import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 110px;

    > span {   
        color: #939;
        text-align: center;
        font-size: 24px;
        font-weight: 900;
        margin-bottom: 40px;
    }
`;

export const BodyContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LeftContainer = styled.div`
    > span {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 200px;
    }
`;

export const FormContact = styled.div`
    display: flex;
    flex-direction: column  ;
`;

export const RightContainer = styled.div`
    > span {
        font-size: 36px;
        font-weight: 600;
    }
`;

export const SocialSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    > span {
        font-size: 20px;
        font-weight: 600;
        padding-left: 20px;
    }
`;

export const SocialIcon = styled.img`
    width: 80px;
    height: 80px;
`;  