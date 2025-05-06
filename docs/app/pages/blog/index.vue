<script setup lang="ts">
// @ts-expect-error yaml is not typed
import page from '.blog.yml'

const { data: posts } = await useAsyncData('blogs', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

useSeoMeta({
  titleTemplate: `%s`,
  title: page.title,
  description: page.description,
  ogTitle: `${page.title}`,
  ogDescription: page.description
})

/* defineOgImageComponent('Docs', {
  headline: 'Blog',
  title: page.title,
  description: page.description
}) */
</script>

<template>
  <UContainer v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
    />

    <UPageBody>
      <UContainer>
        <UBlogPosts class="mb-12 md:grid-cols-2 lg:grid-cols-3">
          <UBlogPost
            v-for="(article, index) in posts"
            :key="article.path"
            :to="article.path"
            :title="article.title"
            :description="article.description"
            :image="{
              src: article.image,
              width: (index === 0 ? 672 : 437),
              height: (index === 0 ? 378 : 246),
              alt: `${article.title} image`
            }"
            :authors="article.authors?.map(author => ({ ...author, avatar: { ...author.avatar, alt: `${author.name} avatar` } }))"
            :badge="{ label: article.category, color: 'primary', variant: 'subtle' }"
            :variant="index === 0 ? 'outline' : 'subtle'"
            :orientation="index === 0 ? 'horizontal' : 'vertical'"
            :class="[index === 0 && 'col-span-full']"
          />
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </UContainer>
</template>
