//index.tsx is the root page of the website

'use client'
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Text, Button } from '@mantine/core';
import Link from 'next/link'
import AnnualLeave from './AnnualLeave';

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
        <Button component="a" href="/AnnualLeave" variant="outline" >
          Annual Leave
        </Button>
        <Button component="a" href="/LongServicePayment" variant="outline" >
          LongService
        </Button>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}