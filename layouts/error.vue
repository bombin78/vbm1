<template>

    <section class="page">

  	<h2 class="page__content-title content-title">Ошибка 404</h2>

  	<p class="page__text-error">Запрошенная вами страница не существует</p>

  </section>

</template>

<script>
export default {
  head: {
    title: 'Страница 404 ошибки',
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.page {
	@include main-content();

	&__text-error {
		margin-top: 20px;
		font-size: $fontSize + 14px;
	}
}
</style>
