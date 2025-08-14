---
title: Accordion
description: 'Learn how to use the ProseAccordion component in your Nuxt app.'
framework: nuxt
category: vue-components
---

Use the `accordion` and `accordion-item` components to display an [Accordion](/docs/components/accordion) in your content.

::code-preview{class="[&>div]:*:my-0"}

:::accordion

::accordion-item{label="What are the main considerations when upgrading to Nuxt UI v3?" icon="i-lucide-circle-help"}
The transition to v3 involves significant changes, including new component structures, updated theming approaches, and revised TypeScript definitions. We recommend a careful, incremental upgrade process, starting with thorough testing in a development environment.
::

::accordion-item{label="Is Nuxt UI v3 compatible with standalone Vue projects?" icon="i-lucide-circle-help"}
Nuxt UI is now compatible with Vue! You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.
::

::accordion-item{label="What about Nuxt UI Pro?" icon="i-lucide-circle-help"}
We've also rebuilt Nuxt UI Pro from scratch and released a `v3.0.0-alpha.x` package but it only contains the components to build this documentation yet. This will be a free update, so the license you buy now will be valid for v3. We're actively working to finish the rewrite of all Nuxt UI Pro components.
::

:::

#code

```mdc
::accordion

::accordion-item{label="What are the main considerations when upgrading to Nuxt UI v3?" icon="i-lucide-circle-help"}
The transition to v3 involves significant changes, including new component structures, updated theming approaches, and revised TypeScript definitions. We recommend a careful, incremental upgrade process, starting with thorough testing in a development environment.
::

::accordion-item{label="Is Nuxt UI v3 compatible with standalone Vue projects?" icon="i-lucide-circle-help"}
Nuxt UI is now compatible with Vue! You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.
::

::accordion-item{label="What about Nuxt UI Pro?" icon="i-lucide-circle-help"}
We've also rebuilt Nuxt UI Pro from scratch and released a `v3.0.0-alpha.x` package but it only contains the components to build this documentation yet. This will be a free update, so the license you buy now will be valid for v3. We're actively working to finish the rewrite of all Nuxt UI Pro components.
::

::
```

::

## API

### Props

:component-props{name="accordion" prose}

## Theme

::component-theme{slug="accordion" prose}
---
extra:
  - accordionItem
---
::

## Changelog

:component-changelog
