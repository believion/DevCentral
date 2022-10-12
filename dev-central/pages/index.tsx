import type { NextPage } from 'next';
import { ColorSchemeProvider, ColorScheme, Paper } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import AppShellCustom from "../components/AppShellCustom"
import ThemeWrapper from '../components/ThemeWrapper';
import TableExample from '../components/TableExample';
import Infocard from '../components/Infocard';
const Home: NextPage = () => {
  return (
    <ThemeWrapper>
    <Paper>
      <AppShellCustom>
        <Infocard id="tanish arora" posttype="dev story">
          Hello world this is tanish arora
        </Infocard>
        <Infocard id="tanish arora" posttype="dev story">
          Hello world this is tanish arora
        </Infocard>
        <Infocard id="tanish arora" posttype="dev story">
          Hello world this is tanish arora
        </Infocard>
      </AppShellCustom>
    </Paper>
    </ThemeWrapper>
  )
}

export default Home
