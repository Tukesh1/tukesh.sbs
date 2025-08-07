import { MetadataRoute } from 'next'
import { siteMetadata } from '@/data/siteMetadata'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.title,
    short_name: 'Tukesh',
    description: siteMetadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#1D1E20',
    theme_color: '#1D1E20',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}