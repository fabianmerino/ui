import { ref } from 'vue'
import type { Ref, Plugin as VuePlugin } from 'vue'

import appConfig from '#build/app.config'
import type { NuxtApp } from '#app'
import { useColorMode as useColorModeVueUse } from '@vueuse/core'

export { useHead } from '@unhead/vue'

// Create stub implementations for vue-router
export const useRouteStub = () => ({
  path: '',
  name: null,
  params: {},
  query: {},
  hash: '',
  fullPath: '',
  matched: [],
  meta: {},
  redirectedFrom: undefined
})

export const useRouterStub = () => ({
  push: () => Promise.resolve(),
  replace: () => Promise.resolve(),
  go: () => Promise.resolve(),
  back: () => Promise.resolve(),
  forward: () => Promise.resolve(),
  beforeEach: () => () => {},
  afterEach: () => () => {},
  getRoutes: () => [],
  hasRoute: () => false,
  currentRoute: ref({})
})

// Use a runtime check to determine which implementation to use
let _useRoute = useRouteStub
let _useRouter = useRouterStub

// Try to import from vue-router
try {
  // This will throw if vue-router is not available
  const vueRouter = await import('vue-router')
  if (vueRouter.useRoute && vueRouter.useRouter) {
    // Type assertion with unknown to fix type compatibility issues
    _useRoute = vueRouter.useRoute as unknown as typeof _useRoute
    _useRouter = vueRouter.useRouter as unknown as typeof _useRouter
  }
} catch {
  // Use the stubs if vue-router is not available
}

export const useRoute = _useRoute
export const useRouter = _useRouter

export { defineShortcuts } from '../composables/defineShortcuts'
export { useLocale } from '../composables/useLocale'

export const useColorMode = () => {
  if (!appConfig.colorMode) {
    return {
      forced: true
    }
  }

  const { store, system } = useColorModeVueUse()

  return {
    get preference() { return store.value === 'auto' ? 'system' : store.value },
    set preference(value) { store.value = value === 'system' ? 'auto' : value },
    get value() { return store.value === 'auto' ? system.value : store.value },
    forced: false
  }
}

export const useAppConfig = () => appConfig

export const useCookie = <T = string>(
  _name: string,
  _options: Record<string, any> = {}
) => {
  const value = ref(null) as Ref<T>

  return {
    value,
    get: () => value.value,
    set: () => {},
    update: () => {},
    refresh: () => Promise.resolve(value.value),
    remove: () => {}
  }
}

const state: Record<string, any> = {}

export const useState = <T>(key: string, init: () => T): Ref<T> => {
  if (state[key]) {
    return state[key] as Ref<T>
  }
  const value = ref(init())
  state[key] = value
  return value as Ref<T>
}

export function useNuxtApp() {
  return {
    isHydrating: true,
    payload: { serverRendered: false }
  }
}

export function defineNuxtPlugin(plugin: (nuxtApp: NuxtApp) => void) {
  return {
    install(app) {
      plugin({ vueApp: app } as NuxtApp)
    }
  } satisfies VuePlugin
}
