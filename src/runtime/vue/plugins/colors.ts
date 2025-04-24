import { computed, watch, watchEffect } from 'vue'
import colors from 'tailwindcss/colors'
import { useHead } from '@unhead/vue'
import type { Plugin } from 'vue'
import { useAppConfig } from '../composables/useAppConfig'

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

function getColor(color: keyof typeof colors, shade: typeof shades[number]): string {
  if (color in colors && typeof colors[color] === 'object' && shade in colors[color]) {
    return colors[color][shade] as string
  }
  return ''
}

function generateShades(key: string, value: string) {
  return `${shades.map(shade => `--ui-color-${key}-${shade}: var(--color-${value === 'neutral' ? 'old-neutral' : value}-${shade}, ${getColor(value as keyof typeof colors, shade)});`).join('\n  ')}`
}

function generateColor(key: string, shade: number) {
  return `--ui-${key}: var(--ui-color-${key}-${shade});`
}

export default {
  install(app) {
    app.runWithContext(() => {
      const appConfig = useAppConfig()

      const root = computed(() => {
        const { neutral, ...colors } = appConfig.ui.colors

        return `@layer base {
  :root {
  ${Object.entries(appConfig.ui.colors).map(([key, value]: [string, string]) => generateShades(key, value)).join('\n  ')}
  }
  :root, .light {
  ${Object.keys(colors).map(key => generateColor(key, 500)).join('\n  ')}
  }
  .dark {
  ${Object.keys(colors).map(key => generateColor(key, 400)).join('\n  ')}
  }
}`
      })

      useHead({
        style: [{
          innerHTML: root,
          tagPriority: -2,
          id: 'nuxt-ui-colors'
        }]
      })

      if (typeof document !== 'undefined') {
        watchEffect(() => {
          console.log('Colors changed, updating style:', JSON.stringify(appConfig.ui.colors))

          let styleEl = document.querySelector('#nuxt-ui-colors-vue') as HTMLStyleElement
          if (!styleEl) {
            styleEl = document.createElement('style')
            styleEl.id = 'nuxt-ui-colors-vue'
            document.head.appendChild(styleEl)
          }

          styleEl.innerHTML = root.value
        })
      }
    })
  }
} satisfies Plugin
