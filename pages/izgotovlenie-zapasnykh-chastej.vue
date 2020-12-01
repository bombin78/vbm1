<template>

  <section class="page">

  	<h2 class="page__content-title content-title">Изготовление запасных частей</h2>

  </section>

</template>

<script>
import {SideMenu} from '@/assets/main';

export default {
  head: {
    title: 'Изготовление запасных частей',
  },
  mounted () {
    const sideMenu = new SideMenu();
		sideMenu.init();
  },
  beforeDestroy() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
  },
  middleware: ['technical-works'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.page {
	@include main-content();
}
</style>
