<script setup>
import MV from './components/MainVisual.vue'
import Section from './components/SectionParts.vue'
import PrimaryHeading from './components/PrimaryHeading.vue'
import ColumnBox from './components/ColumnBox.vue'
import LinkBtn from './components/LinkBtn.vue'
</script>

<template>
  <main class="main">
    <div class="wrapper">
      <MV />
      <Section id="about">
        <PrimaryHeading class="mb-lg">毎日をもっと素敵に</PrimaryHeading>
        <ColumnBox :items="[1, 2]" :columns="{ sm: 1, lg: 2 }" gap="40px" align="center">
          <template #default="{ index }">
            <template v-if="index === 0">
              <div class="img">
                <img src="/images/img01.jpg" alt="" class="round" />
              </div>
            </template>
            <template v-else>
              <div class="content">
                <p class="text">
                  あなたの製品、サービス、会社の特別なところは何ですか？
                  <br />他社にはない特徴、<br />独自の理念、受賞歴など、競合との違いを際立たせる要素をアピールしましょう。<br />オーディエンスの注目を集めるエレベーターピッチだと考えてみてください。
                </p>
                <LinkBtn class="btn--center mt-xl"> もっと見る</LinkBtn>
              </div>
            </template>
          </template>
        </ColumnBox>
      </Section>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
