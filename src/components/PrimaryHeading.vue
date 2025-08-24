<template>
  <h2 class="primary-heading">
    <slot></slot>
  </h2>
</template>

<style lang="scss" scoped>
.primary-heading {
  font-family: $ff-shippori-mincho;
  font-style: italic;
  font-weight: 500;
  font-size: fz(48);
  @include mq {
    font-size: fz(32);
  }
}
</style>
