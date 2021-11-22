import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { withApollo } from '../apollo/apollo';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

const QUERY = gql`
  query Books {
    books {
      title
      author
    }
  }
`;

const NOSSR = () => {
  const { data, loading, error, refetch } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const books = data.books.slice(0, 4);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS Apollo Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Non server-side rendered page (static) {'\n'}
          <code className={styles.code}>
            <Link href="/ssr">click to view SSR</Link>
          </code>
        </p>

        <h1>Books</h1>

        <button className={styles.button} onClick={() => refetch()}>
          Refetch
        </button>

        <div className={styles.grid}>
          {books.map((book) => (
            <div key={book.title} className={styles.card}>
              <h1>{book.title}</h1>
              <h3>{book.author}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default withApollo({ ssr: false })(NOSSR);
