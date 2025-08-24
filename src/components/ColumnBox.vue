<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => {},
  },
  columns: {
    type: [Number, Object],
    default: 2,
  },
  gap: {
    type: String,
    default: '20px',
  },
  align: {
    type: String,
    default: 'flex-start',
  },
})

const windowWidth = ref(window.innerWidth)

const updateWidth = () => (windowWidth.value = window.innerWidth)

onMounted(() => window.addEventListener('resize', updateWidth))
onUnmounted(() => window.removeEventListener('resize', updateWidth))

const gridStyle = computed(() => {
  let cols = 1
  if (typeof props.columns === 'number') {
    cols = props.columns
  } else {
    if (windowWidth.value < 768) cols = props.columns.sm || 1
    else if (windowWidth.value < 1024) cols = props.columns.md || 2
    else cols = props.columns.lg || 4
  }

  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: props.gap,
    alignItems: props.align,
  }
})
</script>

<template>
  <div class="colbox" :style="gridStyle">
    <div v-for="(_, index) in items" :key="index" class="colbox__item">
      <slot :index="index"></slot>
    </div>
  </div>
</template>

<style lang="scss"></style>
