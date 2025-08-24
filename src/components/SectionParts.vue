<script setup>
defineProps({
  id: String, // 親から渡す id を受け取る
})
</script>

<template>
  <section class="section" :id="id">
    <div class="section__inner">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding-block: 40px;
  padding-inline: 20px;
  &:first-of-type {
    margin-top: 40px;
  }
  &__inner {
    max-width: 1200px;
    margin-inline: auto;
  }
}
</style>
