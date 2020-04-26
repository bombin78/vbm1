<template>

  <section class="page">

  	<h2 class="page__content-title content-title">Аренда ж.д.техники с экипажом и без него</h2>

    <p class="page__text">
      Предоставляем железнодорожную технику (АДМ-1, МПТ-6, АДМс, АДМ-СКМ, КЖС-16, АВФ-1)
      в длительную аренду как с экипажем так и без него.
    </p>

    <dl class="page__dtl dtl">
      <dt class="dtl__l">Срок аренды:</dt>
      <dd class="dtl__v">от двух месяцев.</dd>
    </dl>

    <dl class="page__dtl dtl">
      <dt class="dtl__l">Условия оплаты:</dt>
      <dd class="dtl__v">предоплата 100% за один месяц</dd>
    </dl>

    <p class="page__text">
      По вопросам аренды ж/д техники заявку направлять на электронную почту:
      <a class="email" :href="`mailto:${eMail}`">{{eMail}}</a>.
    </p>

  </section>

</template>

<script>
import {SideMenu} from '@/assets/main';

export default {
  head: {
    title: 'Аренда ж.д.техники с экипажом и без него',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Предоставляем железнодорожную технику в длительную аренду'
      }
    ],
  },
  data() {
    return {
      eMail: 'info@vbm1.ru',
    };
  },
  mounted () {
    const sideMenu = new SideMenu();
    sideMenu.init();
  },
  beforeDestroy() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.page {
	@include main-content();

  &__text {
    padding     : 10px 0;

    line-height : 1.3;
    text-align  : justify;
    text-indent : 25px;
  }

  &__dtl.dtl {
    display: flex;
    padding-left: 25px;

    .dtl {
      &__v {
        margin-left: 5px;
      }
    }
  }
}

.email {
	color: $darkBlue;

	&:hover {
		text-decoration: underline;
	}
}
</style>
