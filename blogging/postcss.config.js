// postcss.config.js
export default {
  plugins: {
    // Explicitly set postcss-import to false to stop it from running
    'postcss-import': false, 
    tailwindcss: {},
    autoprefixer: {},
  },
};
