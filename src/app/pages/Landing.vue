<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import LangSwitcher from '@/shared/components/LangSwitcher.vue'

const { t } = useI18n()
</script>

<template>
  <section class="p-4">
    <h1 class="font-black text-3xl">{{ t('welcome') }}</h1>
    <LangSwitcher class="mt-4" />
  </section>
</template>
