/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        colors: {
            neon: {
                pink: '#FF00FF',
                green: '#39FF14',
                blue: '#00FFFF',
                purple: '#BF00FF',
            },
        },
    },
};
export const plugins = [];