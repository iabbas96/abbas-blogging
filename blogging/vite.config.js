import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// You might see an import like this, which is causing the error:
// import flowbite from 'flowbite-react/vite'; 

// Use this configuration instead:
export default defineConfig({
  plugins: [
    react(),
    // We don't need a specific Vite plugin for Flowbite/Tailwind here
    // as it's typically handled by PostCSS config
  ],
});
