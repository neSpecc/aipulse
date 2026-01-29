import { type ConfigEnv, defineConfig, loadEnv, type UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import BuildMode from './types/mode.ts';

export default (config: ConfigEnv): UserConfigExport => {
  console.log('building for ' + config.mode);

  loadEnv(config.mode?.toString() ?? BuildMode.Development, '');

  return defineConfig({
    plugins: [vue()],
    base: './',
  });
};
