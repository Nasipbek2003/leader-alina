import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="description" content="Профессиональный бизнес-консультант и мотивационный спикер с 8-летним опытом. Помогаю предпринимателям достигать целей через эффективные стратегии развития." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
