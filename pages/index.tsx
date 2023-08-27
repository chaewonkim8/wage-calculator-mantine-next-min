//index.tsx is the root page of the website

'use client'
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