//index.tsx is the root page of the website

'use client'
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Text, Button } from '@mantine/core';
import FrontPage from '../components/FrontPage'
import Link from 'next/link'
import AnnualLeave from './AnnualLeave';

export default function IndexPage() {
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
        <FrontPage/>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}