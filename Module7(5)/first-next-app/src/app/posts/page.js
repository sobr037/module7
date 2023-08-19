import React from 'react';
import Head from 'next/head';
import Header from '../about/components/Header';
import PostList from '../about/components/PostList';

function Posts() {
  return (
    <div>
      <Head>
      </Head>
      <Header />
      <PostList />
    </div>
  );
}

export default Posts;