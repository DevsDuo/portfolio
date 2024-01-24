import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #121212;
    height: 100px;
    padding-left: 100px;
    padding-right: 100px;
    position: fixed;
    z-index: 999;
    width: 100%;
    box-shadow: 0 0 10px #939;
`;

export const LeftHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LogoHeader = styled.div`    
    > img {
        width: 200px;
    }
`;

export const LogoHeaderHover = styled.div`
    display: none;

    > img {
        width: 200px;
        padding-top: 30px;
    }
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
        color: #939;
    }

    @media (max-width:780px) {
        display:none;
    }
`;

export const IconTheme = styled.div`
    margin-left: 16px;
`;

export const HiddenMenuButton = styled.button`
    display:none;


    @media (max-width:780px) {
        display:block;
    }
`


interface visibleMenu {
    visibility:string;
}


export const HiddenMenuHeader = styled.div<visibleMenu>`
    display:none;
    position:absolute;
    flex-direction:column;
    border-radius:10px;
    background-color:#222222;
    padding:1rem;
    top:80px;

    @media (max-width: 780px) {
        display:${props => props.visibility}
    }

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
        color: #939;
    }

`