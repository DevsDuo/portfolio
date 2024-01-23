import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 110px;
    margin-bottom: 50px;
    scroll-margin-top: 130px;

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
    padding-top: 30px;
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
    flex-direction: column;
    padding-top: 30px;
`;

export const InputGroup = styled.div`
    position: relative;
    margin: 30px 0;
    border-bottom: 2px solid #939;

    > label {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        font-size: 16px;
        color:#FFFFFF47;
        pointer-events: none;
        transition: 0.5s;
    }

    > input, textarea {
        width: 320px;
        height: 40px;
        font-size: 16px;
        color: #fff;
        padding: 0 5px;
        background: transparent;
        border: none;
        outline: none;
    }

    > input:focus~label,
    input:valid~label {
        top: -5px;
    }
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
    padding-top: 30px;

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