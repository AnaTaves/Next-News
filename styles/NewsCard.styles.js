import styled from "styled-components";

export const Article = styled.article`
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
margin-bottom: 25px;
box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
padding: 30px;
transform: translateZ(0);

&:hover {
    transform: scale(1.05);
  }

img{
    width: 100%;
}

@media screen and (max-width: 720px){
  width: 400px;
}
`;

export const Title = styled.h1`
margin-bottom: 10px;
`;

export const Description = styled.p`
margin-bottom: 10px;
`;

export const Button = styled.button`
padding: 20px;
cursor: pointer;
margin: 22px auto;

`;