import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'home-hero':
                    'url("https://images.unsplash.com/photo-1531297484001-80022131f5a1")',
                'portfolio-hero':
                    'url("https://images.pexels.com/photos/374631/pexels-photo-374631.jpeg")',
                'blog-hero':
                    'url("https://images.pexels.com/photos/3459979/pexels-photo-3459979.jpeg")',
                'contact-hero':
                    'url("https://images.unsplash.com/photo-1587560699334-cc4ff634909a")',
                'about-hero':
                    'url("https://images.pexels.com/photos/753994/pexels-photo-753994.jpeg")'
            }
        }
    },
    plugins: []
};
export default config;
