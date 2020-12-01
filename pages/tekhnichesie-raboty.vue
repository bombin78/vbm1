<template>

  <section class="page">

  	<h2 class="page__content-title content-title">Технические работы</h2>

    <p class="page__text-error">На сайте ведутся технические работы.</p>

  </section>

</template>

<script>
import {SideMenu} from '@/assets/main';

export default {
  head: {
    title: 'Технические работы',
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
