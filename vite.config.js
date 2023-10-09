import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';

const options = { pretty: true };
const locals = { name: 'My Pug' };

export default defineConfig({
  base: '/library/library/',
  plugins: [pugPlugin(options, locals)],
});
