import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const appTheme = {
  colors: {
    primary1: '#014E56',
    primary2: '#F67E7E',
    primary3: '#FFFFFF',
    secondary1: '#79C8C7',
    secondary2: '#2C6269',
    secondary3: '#004047',
    secondary4: '#012F34',
    secondary5: '#002529',
  },
  font: `'Livvic', sans-serif`,
};

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Livvic:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
