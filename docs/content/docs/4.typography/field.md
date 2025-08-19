---
title: Field
description: 'Learn how to use the ProseField component in your Nuxt app.'
framework: nuxt
category: vue-components
---

A field, prop or parameter to display in your content.

::code-preview
::field{name="name" type="string" required class="w-full"}
The `description` can be set as prop or in the default slot with full **markdown** support.
::

#code

```mdc
::field{name="name" type="string" required}
The `description` can be set as prop or in the default slot with full **markdown** support.
::
```

::

## API

### Props

:component-props{name="field" prose}

## Theme

:component-theme{slug="field" prose}

## Changelog

:component-changelog{prose}
