---
title: Introduction
description: 'Beautiful typography components and utilities to style your content with Nuxt UI.'
framework: nuxt
navigation.icon: i-lucide-type
---

Nuxt UI provides a comprehensive typography system that transforms your markdown content into beautifully styled documentation. Whether you're writing technical documentation, blog posts, or any other content, Nuxt UI ensures consistent and professional typography throughout your application.

## Overview

The typography system in Nuxt UI is built around two main concepts:

::card-group
::card
---
title: Markdown & Prose
icon: i-lucide-heading
to: /docs/typography/markdown-and-prose
---
Learn markdown syntax and enhanced prose components that provide consistent styling for headings, paragraphs, lists, tables, and more.
::

::card
---
title: Vue Components
icon: i-lucide-blocks
to: /docs/typography/vue-components
---
Specialized Vue components for enhanced content authoring, including badges, callouts, code blocks, and interactive elements.
::
::

## Content Integration

When using Nuxt UI with [Nuxt Content](https://content.nuxt.com/), your markdown content is automatically enhanced with beautiful typography:

```vue
<template>
  <ContentRenderer :value="data" />
</template>
```

The `ContentRenderer` component automatically applies Nuxt UI's typography styles to your markdown content, transforming it into a polished, professional presentation without any additional configuration.

::note{to="https://content.nuxt.com/docs/getting-started/installation" target="_blank"}
Follow the `@nuxt/content` installation guide to get started with content management.
::

## What's Included

### Markdown & Prose Components

Complete markdown support with enhanced prose styling:

- **Headings** - H1 through H6 with consistent hierarchy and themes
- **Text formatting** - Bold, italic, strikethrough with enhanced styling
- **Lists** - Ordered, unordered, and nested lists with proper spacing
- **Links** - Internal and external links with proper contrast
- **Tables** - Responsive tables with clean design and theming
- **Code** - Inline code and syntax-highlighted code blocks
- **Blockquotes** - Highlighted quotations and callouts
- **Media** - Responsive images with automatic optimization

[Learn Markdown & Prose →](/docs/typography/markdown-and-prose)

### Vue Components

Specialized components for enhanced content authoring:

- **Interactive elements** - Badges, callouts, collapsibles
- **Code presentation** - Code groups, previews, and trees
- **Layout components** - Cards, field groups, and steps
- **UI elements** - Icons, keyboard shortcuts, and tabs

[Discover Vue Components →](/docs/typography/vue-components)

## Direct Usage

You can use any prose component directly in your Vue templates with the `Prose` prefix:

```vue
<template>
  <ProseTable>
    <ProseThead>
      <ProseTr>
        <ProseTh>Component</ProseTh>
        <ProseTh>Description</ProseTh>
      </ProseTr>
    </ProseThead>
    <ProseTbody>
      <ProseTr>
        <ProseTd>
          <ProseCode>Badge</ProseCode>
        </ProseTd>
        <ProseTd>Display version numbers or status labels</ProseTd>
      </ProseTr>
    </ProseTbody>
  </ProseTable>
</template>
```

This approach gives you full control over your content structure while maintaining consistent typography styling.

## Getting Started

1. **Install Nuxt UI** - Follow the [installation guide](/docs/getting-started/installation)
2. **Set up Nuxt Content** - Add content management capabilities
3. **Start writing** - Create markdown files and let Nuxt UI handle the styling

::tip
Typography components work seamlessly with Nuxt UI's theming system. Customize colors, spacing, and styling through your `app.config.ts` to match your brand.
::

Ready to enhance your content? Start with [Markdown & Prose](/docs/typography/markdown-and-prose) to learn the basics and styling, or explore [Vue Components](/docs/typography/vue-components) for advanced content authoring.
