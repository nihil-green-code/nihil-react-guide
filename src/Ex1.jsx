import React from 'react';
import Layout from './components/Ex1/Layout';

export default function Ex1() {
  return (
    <>
      <Layout bgColor='red' color='white'>Red</Layout>
      <Layout bgColor='blue' color='white'>Blue</Layout>
      <Layout bgColor='green' color='white'>Green</Layout>
      <Layout bgColor='yellow' color='black'>Yellow</Layout>
    </>
  );
}
