import Head from "next/head";
import Image from 'next/image';

import * as S from '../styles/EOM.styles';

export default function EOM({ employee }) {
  return (
    <>
        <Head>
        <title>Employee Of The Month</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
      </Head>

      <main>
       

        <S.Container>
          <h1>Employee Of The Month</h1>

          <S.Employee>
            <h3>{employee.name}</h3>
            <h6>{employee.position}</h6>
            <Image src='https://robohash.org/3?size=180x180' alt="employee" width='180' height='180' />
            <p>{employee.description}</p>
          </S.Employee>
        </S.Container>
      </main>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};
