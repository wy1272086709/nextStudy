declare module 'vite-plugin-eslint' {
  import { Plugin } from 'vite';
  
  interface Options {
    cache?: boolean;
    include?: string[];
    exclude?: string[];
    formatter?: string;
    emitWarning?: boolean;
    emitError?: boolean;
    failOnWarning?: boolean;
    failOnError?: boolean;
    overrideConfig?: object;
    lintOnStart?: boolean;
    fix?: boolean;
  }
  
  function eslint(options?: Options): Plugin;
  
  export default eslint;
}