/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Extension for env variables
 */
interface ImportMetaEnv {
  /**
   * Integration token got from Hawk Project Settings
   */
  readonly VITE_HAWK_TOKEN: string;
}

/**
 * Extend Vite's import.meta
 */
interface ImportMeta {
  /**
   * Extend env with custom variables
   */
  readonly env: ImportMetaEnv;
}
