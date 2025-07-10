import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['lib'],
      rollupTypes: true,
      exclude: ['src'],
    }),
  ],
  build: {
    lib: {
      entry: {
        'poc-deploy-npm': resolve(__dirname, 'lib/components/main.ts'),
      },
      name: 'PocDeploy',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
})