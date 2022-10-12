import type { NextPage } from 'next';
import { ColorSchemeProvider, ColorScheme, Paper } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import AppShellCustom from "../components/AppShellCustom"
import ThemeWrapper from '../components/ThemeWrapper';
import TableExample from '../components/TableExample';

const Home: NextPage = () => {
  return (
    <ThemeWrapper>
    <Paper>
    <AppShellCustom>
      <TableExample />
    </AppShellCustom>
    </Paper>
    </ThemeWrapper>
  )
}

export default Home
