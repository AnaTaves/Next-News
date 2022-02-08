import styled from "styled-components";

export const Feed = styled.main`
margin: 0 auto;
`;

export const ArticleList = styled.article`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 30px;
margin: 50px auto;

@media screen and (max-width: 720px){
    grid-template-columns: 1fr;
    grid-gap: 30px;
}
`;

export const Paginator = styled.div`
width: 100%;
display: flex;
justify-content: center;

div{
    margin: 25px;
}

@media screen and (max-width: 720px){
    justify-content: center;
    align-items: center;
}
`;

export const PreviousPage = styled.div`
cursor: ${(props) => (props.pageNumber === 1 ? "not-allowed" : "pointer")};
color: ${(props) => (props.pageNumber === 1 ? "#B3B3B3" : "#363537")};
`;

export const NextPage = styled.div`
cursor: ${(props) => (props.pageNumber === 5 ? "not-allowed" : "pointer")};
color: ${(props) => (props.pageNumber === 5 ? "#B3B3B3" : "#363537")};
`;