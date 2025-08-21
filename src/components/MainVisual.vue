<template>
  <div class="mv">
    <div class="mv__bg">
      <div class="mv__inner">
        <div class="mv__item">
          <div class="mv__logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <h1 class="mv__title">モダン<br />ライフスタイル<br />ショップ</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mv {
  min-height: 100vh;
}
.mv__bg {
  min-height: inherit;
  background: url(/images/mv.jpg) no-repeat center / cover;
  position: relative;
  &::after {
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-color: rgba($color: $black, $alpha: 0.5);
    width: 100%;
    height: 100%;
    z-index: 2;
  }
}
.mv__inner {
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mv__item {
  min-height: inherit;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
}
.mv__logo {
  width: 150px;
}
.mv__title {
  color: $white;
  margin-left: 8px;
  font-size: fz(48);
  line-height: 1.3;
  @include mq() {
    font-size: fz(40);
  }
}
</style>
