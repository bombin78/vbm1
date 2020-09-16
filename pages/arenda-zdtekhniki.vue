<template>

  <section class="page">

  	<h2 class="page__content-title content-title">Аренда ж.д.техники с экипажом и без него</h2>

    <p class="page__text">
      Предоставляем железнодорожную технику (АДМ-1, МПТ-6, АДМс, АДМ-СКМ, КЖС-16, АВФ-1)
      в длительную аренду как с экипажем так и без него.
    </p>

    <h3 class="page__title">Условия аренды</h3>

    <dl class="page__dtl dtl">
      <dt class="dtl__l">Срок аренды:</dt>
      <dd class="dtl__v">от двух месяцев.</dd>
    </dl>

    <dl class="page__dtl dtl">
      <dt class="dtl__l">Условия оплаты:</dt>
      <dd class="dtl__v">предоплата 100% за один месяц</dd>
    </dl>

    <ul class="page__review review blueimp-links">

      <li class="review__list">

        <h3 class="review__title">Автомотриса дизельная монтажная АДМ-1 №577</h3>

        <dl class="review__dtl dtl">
          <dt class="dtl__l">Год выпуска:</dt>
          <dd class="dtl__v">2000г</dd>
        </dl>

        <dl class="review__dtl dtl">
          <dt class="dtl__l">Капитальный ремонт:</dt>
          <dd class="dtl__v">КР-1 05.2020г</dd>
        </dl>

        <dl class="review__dtl dtl">
          <dt class="dtl__l">Грузоподъемность крана:</dt>
          <dd class="dtl__v">3.2т</dd>
        </dl>

        <dl class="review__dtl dtl">
          <dt class="dtl__l">Грузоподъемность монтажной площадки:</dt>
          <dd class="dtl__v">500кг</dd>
        </dl>

        <table class="review__photo-adm1-557 table-photo blueimp-links">
    			<tbody>
    			<tr class="table-photo__row">

    				<td class="table-photo__cell">
              <a
                class="table-photo__cell-link"
                href="/images/arenda-zdtekhniki/big/ADM1-557-1.jpeg"
                title="Автомотриса АДМ-1-553"
                data-gallery>
                <img
                  class="table-photo__cell-img"
                  src="/images/arenda-zdtekhniki/ADM1-557-1.jpeg"
                  alt="Автомотриса АДМ-1-553: вид сбоку">
              </a>
    				</td>

    				<td class="table-photo__cell">
              <a
                class="table-photo__cell-link"
                href="/images/arenda-zdtekhniki/big/ADM1-557-2.jpeg"
                title="Автомотриса АДМ-1-553: пульт машиниста"
                data-gallery>
                <img
                  class="table-photo__cell-img"
                  src="/images/arenda-zdtekhniki/ADM1-557-2.jpeg"
                  alt="Автомотриса АДМ-1-553: пульт машиниста">
              </a>
    				</td>

            <td class="table-photo__cell">
              <a
                class="table-photo__cell-link"
                href="/images/arenda-zdtekhniki/big/ADM1-557-3.jpeg"
                title="Автомотриса АДМ-1-553: надписи"
                data-gallery>
                <img
                  class="table-photo__cell-img"
                  src="/images/arenda-zdtekhniki/ADM1-557-3.jpeg"
                  alt="Автомотриса АДМ-1-553: ходовая часть, надписи">
              </a>
    				</td>

    			</tr>
    			</tbody>
    		</table>

      </li>

    </ul>

    <p class="page__text-line">
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

    $('.blueimp-links').on('click', function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          links = this.getElementsByTagName('a');
      blueimp.Gallery(links, options);
    });
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

  &__title {
    margin-top: 5px;
    padding     : 10px 0;

    font-size   : $fontSize + 2px;
    font-weight : bold;
  }

  &__text {
    padding     : 10px 0;

    line-height : 1.3;
    text-align  : justify;
    text-indent : 25px;
  }

  &__text-line {
    padding     : 10px 0;

    line-height : 1.3;
    text-align  : justify;
  }

  &__dtl.dtl {
    display: flex;
    padding-left: 10px;

    .dtl {
      &__v {
        margin-left: 5px;
      }
    }
  }
}

.review {

  margin: 15px 0;

	&__title {
		padding     : 10px 0;

		font-size   : $fontSize + 2px;
		font-weight : bold;
	}

  &__dtl.dtl {
    display: flex;
    padding-left: 10px;

    .dtl {
      &__v {
        margin-left: 5px;
      }
    }
  }
}

.table-photo {
  margin-top: 12px;

  &__cell,
  &__cell-link,
  &__cell-img {
    width: 188px;
  }
}

.email {
	color: $darkBlue;

	&:hover {
		text-decoration: underline;
	}
}
</style>
