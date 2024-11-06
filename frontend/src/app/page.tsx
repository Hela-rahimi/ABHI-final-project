// src/app/page.tsx

"use client"; // Ensure this is at the top

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient'; // Adjust the path if necessary
import UniversityDropdown from '../components/UniversityDropdown'; // Adjust the path if necessary

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>University Selection</h1>
        <UniversityDropdown />
      </div>
    </ApolloProvider>
  );
};

export default Home;
