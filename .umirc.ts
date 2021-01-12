import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
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
