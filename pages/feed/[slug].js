import Head from 'next/head';
import { useRouter } from 'next/router';
import NewsCard from '../../components/newscard';

import * as S from '../../styles/Feed.styles';

export const Feed = ({ articles, pageNumber }) => {
  const router = useRouter();
  return articles.length ? (
    <>
      <Head>
        <title>News Feed</title>
        <meta property="og:image" content={articles[0]?.urlToImage} />
        <meta property="og:description" content={articles[0]?.description} />
        <meta property="og:title" content={articles[0]?.title + ' and more!'} />
      </Head>
      <S.Feed>

        <S.ArticleList>
         { articles.map((article, index) => (
           <NewsCard key={index} article={article}/>
         ))}
        </S.ArticleList>

        <S.Paginator>
          <S.PreviousPage pageNumber={pageNumber}
            
            onClick={() => {
              if (pageNumber > 1) {
                // As of the current version of Next.js the default behavior for router.push
                // will leave the scroll where it is, so we have to manually call scrollTo.
                // This however is being worked on and is fixed in canary.
                // Show this in tutorial vid:
                // https://github.com/vercel/next.js/issues/3249
                router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
           Previous Page
          </S.PreviousPage>

          <div>#{pageNumber}</div>

          <S.NextPage
            pageNumber={pageNumber}
            onClick={() => {
              if (pageNumber < 5) {
                // As of the current version of Next.js the default behavior for router.push
                // will leave the scroll where it is, so we have to manually call scrollTo.
                // This however is being worked on and is fixed in canary.
                // Show this in tutorial vid:
                // https://github.com/vercel/next.js/issues/3249
                router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Next Page
          </S.NextPage>
        </S.Paginator>
      </S.Feed>
    </>
  ) : (
    <main>
    
      <div>
        <h1>Oops! No articles for this page</h1>
      </div>
    </main>
  );
};

export const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    },
  ).then(res => res.json());

  const { articles } = apiResponse;

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;