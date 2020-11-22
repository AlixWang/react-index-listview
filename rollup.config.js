import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import path from 'path'

export default {
  input: path.resolve(__dirname,'src/index.tsx'),
  output: {
    file: 'lib/lib.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    babel({
      exclude: '/node_modules/**',
      include: './src'
    })
],
  external: ['react']
}