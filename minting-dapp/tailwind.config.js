const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: colors.red[600],
        links: {
          txt: colors.red[600],
          hover_txt: colors.red[700],
        },
        loading_spinner: colors.red[600],
        popups: {
          bg: colors.neutral[900],
          txt: colors.white,
          internal_border: colors.black,
        },
        warning: {
          txt: colors.slate[800],
          bg: colors.red[600],
          border: colors.neutral[900],
        },
        error: {
          txt: colors.red[600],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.red[600],
          bg: colors.neutral[900],
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.black,
          bg: colors.red[600],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[600],
          border: colors.red[600],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.red[600],
        txt_input: {
          txt: colors.red[600],
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.red[600],
          focus_bg: colors.slate[50],
          focus_border: colors.red[300],
          placeholder_txt: colors.red[600],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.red[100],
        },

        // Mint widget
        token_preview: colors.neutral[900],
      },
    },
  },
  variants: {},
  plugins: [],
};
