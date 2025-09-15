import { StructuredData } from "../components/structured-data";

export default function Head() {
  return (
    <>
      <link
        rel="icon"
        type="image/png"
        href="/favicon.png"
      />
      <link rel="manifest" href="/manifest.webmanifest" />
   
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
        content="xkBWbb9OnEAZEfrakVYXOpIcFlAH5qEA66FtywraJfI"
      />
      <meta 
        name="dmca-site-verification" 
        content="K1ZuK2dONXZSR1dadCtDc1lxcUkwUT090" 
      />

      {/* Performance: establish early connection for remote project thumbnails */}
      <link rel="preconnect" href="https://opengraph.githubassets.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://opengraph.githubassets.com" />
      
      {/* Structured Data for SEO */}
      <StructuredData type="person" />
      <StructuredData type="website" />
    </>
  );
}
