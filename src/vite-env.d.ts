/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_MOCK_API: boolean;
  VITE_ELEMENTS_PER_PAGE: number;
  VITE_MAX_PAGINATION_BUTTONS: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
