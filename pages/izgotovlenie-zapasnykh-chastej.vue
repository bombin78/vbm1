<template>
  <section class="page">

  	<h2 class="page__content-title content-title">Изготовление запасных частей</h2>

  </section>
</template>

<script>
export default {
  head: {
    title: 'Изготовление запасных частей',
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
