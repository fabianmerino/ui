---
title: Steps
description: 'Learn how to use the ProseSteps component in your Nuxt app.'
framework: nuxt
category: vue-components
---

Wrap your headings with the Steps component to display a list of steps.

Use the `level` prop to define which heading will be used for the steps.

:::code-preview
::steps{level="4"}

#### Add the Nuxt UI module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Import Tailwind CSS in your CSS

```css [assets/css/main.css]
@import "tailwindcss";
```

#### Start your development server

```bash
npm run dev
```

::

#code

````mdc
::steps{level="4"}

#### Add the Nuxt UI module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Import Tailwind CSS in your CSS

```css [assets/css/main.css]
@import "tailwindcss";
```

#### Start your development server

```bash
npm run dev
```

::
````

:::

## Props

:component-props{name="steps" prose}

## Slots

:component-slots{name="steps" prose}

## Theme

:component-theme{slug="steps" prose}
