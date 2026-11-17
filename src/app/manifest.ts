import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lumex Signage Dubai',
    short_name: 'Lumex',
    description: 'Custom 3D letters, neon signs, and lighting solutions in Dubai.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0E0B1F',
    theme_color: '#0E0B1F',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
