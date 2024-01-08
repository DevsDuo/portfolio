import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 500px;
    border-radius: 45px;
    background: linear-gradient(180deg, #761F75 0%, #330036 100%);

    &:hover {
        box-shadow: 0 0 20px #939;
    }
`;