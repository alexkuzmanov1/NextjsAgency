import { ThemeProvider } from "styled-components";
import { theme } from "~/styles";
import { ClerkProvider } from '@clerk/nextjs'

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </ClerkProvider>

  );
  

}

export default MyApp;
