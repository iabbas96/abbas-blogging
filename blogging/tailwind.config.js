/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // The CLI likely added an incorrect path here. We can rely on the plugin.
  ],
  theme: {
    extend: {},
  },
  // Ensure the plugins array includes this line:
  plugins: [
    require('flowbite/plugin')
  ],
  plugins: [
  require('flowbite/plugin') // This uses the v3 plugin format
  ],
}
