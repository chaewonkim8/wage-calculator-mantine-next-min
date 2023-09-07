//LongServicePayment.tsx is the root page of the LongServicePayment calculation

'use client'
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Text } from '@mantine/core';
import { HeaderLongService } from '../components/LSP/HeaderLongService';
import  LSP from '../components/LSP/LSP';

export default function LongServicePayment() {
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
            <HeaderLongService/>
            <LSP />
        </MantineProvider>
      </ColorSchemeProvider>
  );
}