//index.tsx is the root page of the website
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Text } from '@mantine/core';
import { Header } from '../components/Header';
import  LSP from '../components/LSP/LSP';

export default function IndexPage() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
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
            <Header/>
            <LSP />
        </MantineProvider>
      </ColorSchemeProvider>
  );
}

export async function getServerSideProps() {
  // Since there's no data to fetch, simply return an empty object
  return {
    props: {}
  };
}