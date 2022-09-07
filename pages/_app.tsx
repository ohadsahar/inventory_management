import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/globalStyle';
import theme from 'theme/theme';
import store from 'redux/store';
import { useMessages } from 'hooks/useMessages';
import { Toast } from 'primereact/toast';
function MyApp({ Component, pageProps }: AppProps) {
  const { toastRef } = useMessages();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toast ref={toastRef} />
        <Component {...pageProps} />;
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
