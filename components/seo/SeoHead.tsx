import Head from "next/head";
import { APP_SEO } from "../constants";

export interface SeoHeadProps {
  title: string | undefined;
  description?: string;
  favicon?: string;
  noIndex?: boolean;
}

export default function SeoHead({
  title,
  description,
  favicon = "/favicon.ico",
  noIndex = false,
  children,
}: SeoHeadProps & { children?: any }) {
  const titleStr = [title, APP_SEO.title].filter((item) => !!item).join(" | ");

  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Arimo:wght@600&family=Montserrat:wght@200;300;400;500;600;700&family=Noto+Sans+Mono:wght@300&family=Roboto+Mono:wght@300&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/x-icon" href={favicon} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <title>{titleStr}</title>
      <meta name="description" content={description || APP_SEO.description} />
      {children}
    </Head>
  );
}
