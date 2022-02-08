import * as S from '../styles/NewsCard.styles';
import Link from 'next/link';

export default function NewsCard({ article }) {
    return ( 
    <S.Article>
              <S.Title>{article.title}</S.Title>
              <S.Description>{article.description}</S.Description>
              {!!article.urlToImage && <img src={article.urlToImage} alt='article image' />}
                <S.Button href={article.url}>
                  <Link href={article.url}> Read More</Link>
              </S.Button>
    </S.Article> 
    );
}
 
