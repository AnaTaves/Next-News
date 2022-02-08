import Head from "next/head";

import * as S from '../styles/Home.styles';

export default function Home() {
  return (
    <S.HomePage>
      <Head>
        <title>Next News!</title>
      </Head>
      <S.Description >
        <h1>Next.js News</h1>

        <h3>Your place to get the latest news</h3>
      </S.Description>
    </S.HomePage>
  );
}
