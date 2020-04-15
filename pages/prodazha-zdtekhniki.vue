<template>
  <section class="page">

  	<h2 class="page__content-title content-title">Продажа б/у железнодорожной техники</h2>

  </section>
</template>

<script>
export default {
  head: {
    title: 'Продажа б/у железнодорожной техники',
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.page {
	@include main-content();
}
</style>
