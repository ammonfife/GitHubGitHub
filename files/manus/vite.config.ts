import { defineConfig } from 'vite';
import react from 'react';

export default defineConfig({
  plugins: [react],
  root: 'files/manus',
  server: { open: true }
});