'use client'
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Text } from '@mantine/core';
import Header from '../components/AnnualLeave/Header';
import ContentAnnualLeave from '../components/AnnualLeave/ContentAnnualLeave';
import Layout from '../components/Layout';

export default function AnnualLeave() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <Layout>
          <Header />
          <ContentAnnualLeave />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}