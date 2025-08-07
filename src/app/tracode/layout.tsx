import { Metadata } from "next";
import { siteMetadata } from "../../data/siteMetadata";

export const metadata: Metadata = {
  title: siteMetadata.pages.tracode.title,
  description: siteMetadata.pages.tracode.description,
  openGraph: {
    title: siteMetadata.pages.tracode.title,
    description: siteMetadata.pages.tracode.description,
    url: `${siteMetadata.siteUrl}/tracode`,
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}/tracode`,
  },
};

export default function TracodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}