'use client'
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Text } from '@mantine/core';
import { HeaderAnnualLeave } from '../components/AnnualLeave/HeaderAnnualLeave';
import ContentAnnualLeave from '../components/AnnualLeave/ContentAnnualLeave';

export default function AnnualLeave() {
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
        <HeaderAnnualLeave />
        <ContentAnnualLeave />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}