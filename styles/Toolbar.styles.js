import styled from 'styled-components';

export const NavBar = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;

@media screen and (max-width: 720px){
    flex-direction: column;
}
`;

export const NavLinks = styled.ul`
display: flex;
justify-content: space-around;

li{
    padding: 20px;
    list-style: none;
    transition: .2s linear;
    &:hover{
        box-shadow: inset 0 0px 0 white, inset 0 -1px 0 black
    }
}
@media screen and (max-width: 720px){
    display: inline-flex;
    margin-left: 22px;
    margin-right: auto;
}

`;

export const SwitchContainer = styled.div`
@media screen and (max-width: 720px){
    margin: 10px auto;
}

`;

export const Switch = styled.img`
width: 50px;
cursor: pointer;
color: blue;
`;