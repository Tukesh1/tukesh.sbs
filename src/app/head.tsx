import { StructuredData } from "../components/structured-data";

export default function Head() {
  return (
    <>
      <link
        rel="icon"
        type="image/png"
        href="favicon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
   
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="google-site-verification"
        content="br9AjaAyJgS4OVigpXtHmm2DwdzuzMqzpK4G77lD2TY"
      />
      
      {/* Structured Data for SEO */}
      <StructuredData type="person" />
      <StructuredData type="website" />
    </>
  );
}
