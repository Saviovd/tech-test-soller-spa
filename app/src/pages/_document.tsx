import { Html, Head, Main, NextScript } from 'next/document';
import StyledComponentsRegistry from '@/lib/registry';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <StyledComponentsRegistry>
        <body className="antialiased overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </StyledComponentsRegistry>
    </Html>
  );
}
