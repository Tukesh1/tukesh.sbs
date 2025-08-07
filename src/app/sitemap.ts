import { MetadataRoute } from 'next'
import { siteMetadata } from '@/data/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.siteUrl

  // Define all your routes
  const routes = [
    '',
    '/about',
    '/projects',
    '/resume',
    '/tracode',
  ]

  const sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  return sitemap
}