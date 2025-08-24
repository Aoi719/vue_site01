<template>
  <div class="btn">
    <a href="" class="btn__body">
      <slot></slot>
    </a>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.btn {
  display: flex;
  &__body {
    width: fit-content;
    border: 1px solid $black;
    background-color: $black;
    color: $white;
    text-align: center;
    display: block;
    padding: 24px;
    min-width: 240px;
    text-decoration: none;
    transition:
      background-color 0.2s ease-in,
      color 0.2s ease-in;
    &:hover {
      background-color: $white;
      color: $black;
    }
  }
  &--center {
    justify-content: center;
  }
}
</style>
