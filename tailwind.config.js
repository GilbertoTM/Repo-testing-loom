/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Custom Palette for Testing Loom
                loom: {
                    black: {
                        900: '#050505', // Deepest black
                        800: '#0a0a0a', // Main background
                        700: '#121212', // Secondary background (cards)
                        600: '#1c1c1c', // Tertiary
                    },
                    green: {
                        DEFAULT: '#00FF94', // Primary Neon Green
                        300: '#66FFBF', // Light accent
                        400: '#33FFAB',
                        500: '#00FF94', // Base
                        600: '#00CC76', // Hover
                        700: '#009959',
                        900: '#00331E', // Deep tint
                    },
                    gray: {
                        100: '#EDEDED', // Main text
                        200: '#E1E1E1',
                        300: '#C7C7C7',
                        400: '#A1A1A1', // Secondary text
                        500: '#808080',
                        600: '#5E5E5E',
                        700: '#3D3D3D', // Borders
                        800: '#2E2E2E',
                        900: '#171717',
                    }
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
