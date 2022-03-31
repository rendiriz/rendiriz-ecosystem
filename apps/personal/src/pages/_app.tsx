/* eslint-disable import/no-unresolved */
import 'windi.css';
import '@elastic/eui/dist/eui_theme_light.css';

import { EuiProvider } from '@elastic/eui';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.Layout || ((page) => page);

  return (
    <EuiProvider colorMode="light">
      {getLayout(<Component {...pageProps} />)}
    </EuiProvider>
  );
}

export default MyApp;
