import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {},
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  targets: {
    ie: 9,
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  // proxy: {
  //   '/api': {
  //     target: 'https://pvp.qq.com',
  //     changeOrigin: true,
  //     pathRewrite: { '^/api': '' },
  //   },
  // },
});
