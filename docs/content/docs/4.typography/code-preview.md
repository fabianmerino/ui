---
title: CodePreview
description: 'Learn how to use the ProseCodePreview component in your Nuxt app.'
framework: nuxt
category: vue-components
---

Wrap a code-block with the `code-preview` component to display a preview of an MDC component and its code using the `code` slot.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full" label="Preview"}

::code-preview{class="[&>div]:*:my-0"}
`inline code`

#code

```mdc
`inline code`
```

::

#code

````mdc
::code-preview
`inline code`

#code
```mdc
`inline code`
```
::
````

::

## Theme

:component-theme{slug="code-preview" prose}

## Changelog

:component-changelog
