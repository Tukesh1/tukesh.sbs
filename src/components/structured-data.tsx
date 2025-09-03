import { siteMetadata } from "@/data/siteMetadata";

interface StructuredDataProps {
  type: 'person' | 'website' | 'organization';
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
}

export function StructuredData({ 
  type, 
  pageUrl = siteMetadata.siteUrl, 
  pageTitle = siteMetadata.title,
  pageDescription = siteMetadata.description 
}: StructuredDataProps) {
  const generatePersonSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteMetadata.author,
    "url": siteMetadata.siteUrl,
    "email": siteMetadata.social.email,
    "jobTitle": "Frontend Developer & AI Engineer",
    "description": "Frontend Developer & AI Engineer creating responsive web applications and AI-powered solutions",
    "sameAs": [
      siteMetadata.social.githubLink,
      siteMetadata.social.linkedinLink,
      siteMetadata.social.x,
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Web Development",
      "Full Stack Development",
      "Software Engineering",
      "MongoDB",
      "Express.js",
      "Next.js",
      "Tailwind CSS",
      "Python",
      "Machine Learning",
      "AI"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "GL BAJAJ Institute of Technology & Management",
      "sameAs": "https://www.glbajaj.edu.in/"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  });

  const generateWebsiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteMetadata.title,
    "description": siteMetadata.description,
    "url": siteMetadata.siteUrl,
    "author": {
      "@type": "Person",
      "name": siteMetadata.author,
      "url": siteMetadata.siteUrl
    },
    "publisher": {
      "@type": "Person",
      "name": siteMetadata.author
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteMetadata.siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  });

  const generateWebPageSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "author": {
      "@type": "Person",
      "name": siteMetadata.author,
      "url": siteMetadata.siteUrl
    },
    "publisher": {
      "@type": "Person",
      "name": siteMetadata.author
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": siteMetadata.title,
      "url": siteMetadata.siteUrl
    }
  });

  const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteMetadata.title,
    "url": siteMetadata.siteUrl,
    "logo": `${siteMetadata.siteUrl}/favicon.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": siteMetadata.social.email,
      "contactType": "customer support"
    },
    "sameAs": [
      siteMetadata.social.githubLink,
      siteMetadata.social.linkedinLink,
      siteMetadata.social.x,
    ]
  });

  let schema;
  switch (type) {
    case 'person':
      schema = generatePersonSchema();
      break;
    case 'website':
      schema = generateWebsiteSchema();
      break;
    case 'organization':
      schema = generateOrganizationSchema();
      break;
    default:
      schema = generateWebPageSchema();
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}