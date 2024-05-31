/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rust: '#F74C01',
        typescript: '#3078C6',
        swift: '#F05237',
        csharp: '#822C98',
        typst: '#239BAB',
      },
      fontFamily: {
        mono: ['LigaSFMonoNerdFont', 'monospace'],
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#4c4f69",
          "secondary": "#5c5f77",
          "accent": "#6c6f85",
          "neutral": "#ccd0da",
          "base-100": "#eff1f1",
          "info": "#1e66f5",
          "success": "#40a02b",
          "warning": "#df8e1d",
          "error": "#d20f39",
        },
        dark: {
          "primary": "#c6d0f5",
          "secondary": "#b5bfe2",
          "accent": "#a5adce",
          "neutral": "#292c3c",
          "base-100": "#303446",
          "info": "#8caaee",
          "success": "#a6d189",
          "warning": "#e5c890",
          "error": "#e78284",
        },
      },
    ],
  },
};
