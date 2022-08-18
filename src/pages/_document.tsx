import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
