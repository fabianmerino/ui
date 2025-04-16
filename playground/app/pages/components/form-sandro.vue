<template>
  <UContainer>
    <UForm :schema :state @submit="onSubmit">
      <UFormField label="A" name="a">
        <UInput v-model="state.a" />
      </UFormField>
      <UFormField label="B" name="b">
        <UInput v-model="state.b" />
      </UFormField>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>

    {{ output }}
  </UContainer>
</template>

<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import * as v from 'valibot'

const _schemaStringFiltered = v.pipe(v.string(), v.trim())
const schema = v.object({
  a: v.string(),
  b: v.union([
    v.pipe(
      v.array(_schemaStringFiltered),
      v.filterItems((item, index, array) => (array.indexOf(item) === index || item !== ''))
    ),
    v.pipe(
      v.string(),
      v.trim(),
      v.transform(
        (item) => {
          if (item === '') return undefined

          return item
            .split(',')
            .map(val => val.trim())
            .filter(val => val !== '')
        }
      )
    )
  ])
})

const state = reactive<{
  a: string
  b: string
}>({
  a: 'hello, world',
  b: 'hello, world'
})
const output = reactive<{
  a: string
  b?: string[]
}>({
  a: '',
  b: []
})

function onSubmit(event: FormSubmitEvent<v.InferOutput<typeof schema>>) {
  console.log('typeof `a`:', typeof event.data.a) // should be string
  console.log('typeof `b`:', typeof event.data.b) // should be object (array of strings)

  output.a = event.data.a
  output.b = event.data.b
}
</script>
