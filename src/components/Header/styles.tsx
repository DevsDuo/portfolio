import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    height: 100px;
    padding-left: 100px;
    padding-right: 100px;
`;

export const LeftHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LogoHeader = styled.img`
    width: 265px;
    padding-top: 30px;
`;

export const RightHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MenuHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;

    
    > .active {
        color: #993399;
        text-decoration: underline;
    }

    > a {
        color: #fff;
        text-decoration: none;
        transition: all 0.2s;
    }

    > a:hover {
        color: #993399;
        text-decoration: underline;
    }
`;

export const IconTheme = styled.div`
    margin-left: 16px;
`;