import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { visualizer } from 'rollup-plugin-visualizer'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// import pkg from "./package.json"

const input = ['src/index.ts']

export default [
  {
    input,
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        name: 'stone',
        esModule: false,
        exports: 'named',
        sourcemap: true,
      },
      {
        dir: `dist/umd`,
        format: 'umd',
        name: 'stone',
        esModule: false,
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      json(),
      typescript(),
      visualizer({
        // @see https://github.com/btd/rollup-plugin-visualizer
        filename: './visualizer/stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
    ],
  },
]
