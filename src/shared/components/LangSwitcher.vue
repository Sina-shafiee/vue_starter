<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/shared/ui/button'
import { cn } from '../utils/cn'

const { locale, t } = useI18n()

const props = defineProps<{
  class?: string
}>()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'prs' : 'en'
}
</script>

<template>
  <div :class="cn('flex items-center gap-4', props.class)">
    <Button @click="toggleLanguage" variant="outline">
      {{ t('switch') }} ({{ locale === 'en' ? 'دری' : 'English' }})
    </Button>
  </div>
</template>
