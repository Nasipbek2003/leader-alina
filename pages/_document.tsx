import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/alina.png" type="image/png" />
        <link rel="apple-touch-icon" href="/alina.png" />
        <meta name="theme-color" content="#9333EA" />
        <meta name="description" content="Алина Абдрахманова - предприниматель и лидер команды из 700 партнеров. Помогаю людям начать свой путь в онлайн-бизнесе с нуля." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
