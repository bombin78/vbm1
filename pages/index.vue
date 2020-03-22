<template>
  <section class="page">
  	<h2 class="page__content-title content-title">Главная</h2>

  	<p class="page__text">
  		Компания ООО "ВИБРОБУРМАШ" рада приветствовать Вас на своем официальном сайте!
  		Здесь Вы можете ознакомиться с нашей продукцией, а также узнать наши контакты и реквизиты.
  		Если возникли вопросы, звоните. Наши специалисты проконсультируют Вас и помогут подобрать
  		наиболее оптимальное решение.
  	</p>

    <vbm-slider class="page__slider"/>
  </section>
</template>

<script>
import VbmSlider from '@/components/Slider';
export default {
  head: {
    title: 'Главная',
  },
  components: {
    VbmSlider
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.page {
	@include main-content();

	&__text {
		padding: 10px 0;
		line-height: 1.3;
		text-align: justify;
		text-indent: 25px;

		&:nth-of-type(1) {
			margin-top: 10px;
		}
	}

	&__slider.theme-bar {
		margin : 15px auto;
		width  : 576px;
		height : auto;

		border : 1px solid $lightGray;
	}
}
</style>
