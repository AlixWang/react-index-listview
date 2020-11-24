import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import postcssModules from 'postcss-modules'
import path from 'path'

export default {
  input: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    file: 'lib/index.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'runtime',
      extensions: ['jsx', 'tsx', 'ts', 'js']
    }),
    postcss({
      extract: 'index.css',
      modules: true,
      plugins: [
        postcssModules()
      ]
    })
  ],
  external: ['react']
}
