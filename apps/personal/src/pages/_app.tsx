/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import 'windi.css';
import '@/styles/global.css';
import '@elastic/eui/dist/eui_theme_light.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/build/third-party/equation.css';

import { EuiProvider } from '@elastic/eui';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const isLocalhost = process.env.NEXT_PUBLIC_STAGE === 'localhost';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.Layout || ((page) => page);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
          {isLocalhost && <ReactQueryDevtools initialIsOpen={false} />}
        </Hydrate>
      </QueryClientProvider>
    </EuiProvider>
  );
}

export default MyApp;
