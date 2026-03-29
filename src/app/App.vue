<script setup lang="ts">
import { ConfigProvider } from 'reka-ui'
import { useAppLocale } from '@/shared/composables/useAppLocale'

const { direction, locale } = useAppLocale()
</script>

<template>
  <ConfigProvider :dir="direction" :locale="locale">
    <RouterView />
  </ConfigProvider>
</template>
