import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        vrblue: {
          DEFAULT: '#0068b7',
          50: '#e0effe',
          100: '#b9e0fe',
          200: '#7cc7fd',
          300: '#36acfa',
          400: '#0c92eb',
          500: '#0068b7',//メインカラー
          600: '#015aa3',
          700: '#064d86',
          800: '#0b416f',
          900: '#07294a',
          950: '#051c33'
        },
        'bg-default': '#f7f7ff',//body用 背景色
        'text-default': '#333333',//テキストベースカラー
      }
    }
  }
}