/**
 * Bundle mode.
 *
 * Could be passed by "vite build --mode staging"
 * https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
 */
enum BuildMode {
  /**
   * Local Dev env.
   * Fast build, large bundle, static checkers
   */
  Development = 'development',

  /**
   * Production env
   * Slow build, small bundle, tree shaking, polyfills
   */
  Production = 'production',
}

export default BuildMode;
