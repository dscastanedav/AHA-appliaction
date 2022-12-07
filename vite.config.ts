import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// Plugins
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import Unocss from 'unocss/vite';
// import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { presetAttributify, presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
      template: { transformAssetUrls }
    }),

    quasar(),

    // https://github.com/hannoeru/vite-plugin-pages
    // Pages({
    //   dirs: [
    //     { dir: 'src/pages', baseRoute: '' },
    //   ],
    //   exclude: ['**/components/*.vue'],
    // }),
    
    // https://github.com/antfu/unocss
    Unocss({
      presets: [
        presetAttributify({ /* preset options */}),
        presetUno(),
        // ...custom presets
      ],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      imports: [
        'vue',
        'vue-router',
      ],

      dirs: [
        './src/common/composables/**',
        './src/common/constants/**',
        './src/common/enums/**',
        './src/common/interfaces/**',
        './src/common/utils/**',
        './src/helpers/**',
        './src/mocks/**',
        './src/store/**',
      ],

      dts: 'src/auto-imports.d.ts',

      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),

    Components({
      dirs: [
        'src/common/components',
        'src/common/layouts',
        'src/common/ui',
        'src/views',
      ],

      dts: 'src/components.d.ts',

      extensions: ['vue'],

      deep: true,

      resolvers: [
        IconsResolver()
      ],

      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView'],
      }],

      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    Icons(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse'],
    },
  }
})
