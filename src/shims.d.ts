/* eslint-disable import/no-duplicates */
declare interface Window {
  // extend the window
  Waline: any
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
