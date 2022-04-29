<template>

  <section class="page">

    <h2 class="page__content-title content-title">Контакты</h2>

    <h3 class="page__title">Общество с ограниченной ответственностью «Вибробурмашина»</h3>

    <div class="page__block">

      <dl class="page__company-name dtl">
          <dt class="dtl__l">Сокращенное название:</dt>
          <dd class="dtl__v"><strong>ООО «ВИБРОБУРМАШ»</strong></dd>
      </dl>

      <dl class="page__dtl dtl">
          <dt class="dtl__l">Генеральный директор:</dt>
          <dd class="dtl__v">Аверин Михаил Борисович</dd>
      </dl>

      <dl class="page__dtl dtl">
          <dt class="dtl__l">Главный бухгалтер:</dt>
          <dd class="dtl__v">Игнатьева Ирина Владимировна</dd>
      </dl>

      <dl class="page__inn dtl">
          <dt class="dtl__l">ИНН:</dt>
          <dd class="dtl__v">6908018170</dd>
      </dl>

      <dl class="page__ogrn dtl">
          <dt class="dtl__l">ОГРН:</dt>
          <dd class="dtl__v">1196952001180</dd>
      </dl>

    </div>

    <div class="page__block">

      <img class="page__img-workshop" alt="Цех ремонта" src="/images/contacts/workshop-vbm.jpg">

      <dl class="page__dtl dtl">
          <dt class="dtl__l">Юр.адрес:</dt>
          <dd class="dtl__v">171075, Тверская обл., Бологовский район, г.Бологое, ул.Кирпичная, д.1А., оф.1.</dd>
      </dl>

      <dl class="page__dtl dtl">
          <dt class="dtl__l">Факт.адрес:</dt>
          <dd class="dtl__v">171075, Тверская обл., Бологовский район, г.Бологое, ул.Кирпичная, д.1А., оф.1.</dd>
      </dl>

      <dl class="page__dtl dtl">
          <dt class="dtl__l">Тел.:</dt>
          <dd class="dtl__v">{{numPhone}}</dd>
      </dl>

      <dl class="page__dtl dtl">
          <dt class="dtl__l">E-mail:</dt>
          <dd class="dtl__v">
              <a class="email" :href="`mailto:${eMail}`">
                  {{eMail}}
              </a>
          </dd>
      </dl>

    </div>

    <h3 class="page__title">Расположение на карте</h3>

    <div class="page__map">
      <client-only>
        <yandex-map
          :zoom="15"
          :coords="coords"
          :settings="settings">
          <ymap-marker
            marker-id="1"
            marker-type="placemark"
            :coords="coords"
            :balloon-template="balloonTemplate">
          </ymap-marker>
        </yandex-map>
      </client-only>
    </div>

    <div class="schedule">

      <h3 class="schedule__title">Время работы</h3>

      <div class="schedule__info">
          <dl class="schedule__dtl dtl">
              <dt class="dtl__l">пн-пт:</dt>
              <dd class="dtl__v">c 08:00 до 17:00</dd>
          </dl>

          <dl class="schedule__dtl dtl">
              <dt class="dtl__l">сб-вс:</dt>
              <dd class="dtl__v">выходной</dd>
          </dl>
      </div>

    </div>

  </section>

</template>

<script>
import {SideMenu} from '@/assets/main';

export default {
  head: {
    title: 'Контакты',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Контактная информация, адреса, инн, огрн, расположение на карте'
      }
    ],
  },
  data() {
    return {
      numPhone: '+7 (920) 151-65-98',
      eMail: 'info@vbm1.ru',
      settings: {
        apiKey: '5215a7bd-2a74-40d6-a651-8edc1bfc7a2d',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      },
      coords: [57.885435, 34.087535],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 style="font-weight:bold">OOO "Вибробурмаш"</h1>
        <p>Тел.: +7 (920) 151-65-98</p>
      `
    }
  },
  mounted() {
    const sideMenu = new SideMenu();
    sideMenu.init();
  },
  beforeDestroy() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
  },
  // middleware: ['technical-works'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.page {
	@include main-content();
  font-size:14px;

	&__title {
		margin-top: 25px;

		font-size: $fontSize + 2px;
		font-weight: bold;
	}

  &__block {
    margin: {
      top: 24px;
    }
  }

  &__img-workshop {
    float: left;
    margin-top: 4px;
    margin-right: 25px;
    width: 164px;

    outline : 2px solid $middleGray;
  }

	&__company-name.dtl,
	&__dtl.dtl {
		margin-top: 8px;

		.dtl {
			&__l {
        display: inline;
				margin-right: 5px;
			}

      &__v {
        display: inline;
      }
		}
	}

	&__company-name.dtl {
		margin-top: 15px;

		.dtl {
			&__v {
				font-weight: bold;
			}
		}
	}

  &__inn.dtl,
  &__ogrn.dtl {
    display: inline-flex;
    margin-top: 8px;

    .dtl {
      &__l {
        display: inline;
        margin-right: 8px;
      }

      &__v {
        display: inline;
      }
    }
  }

  &__inn.dtl {
    margin-right: 15px;
  }

	&__map {
		margin-top: 5px;
		height: 280px;
		width: 620px;
		border: 2px solid $lightGray;
      .ymap-container {
        width: 100%;
        height: 100%;
      }
	}
}

.email {
	color: $darkBlue;

	&:hover {
		text-decoration: underline;
	}
}

.schedule {
	display: flex;
	margin: {
		top: 30px;
		right: 20px;
		bottom: 15px;
	}

	&__title {
		margin-right: 20px;
		font-size: $fontSize + 2px;
		font-weight: bold;
	}

	&__info {
		border-left: 2px solid $lightGray;
    	padding-left: 20px;
	}

	&__dtl.dtl {
		display: flex;
		margin-top: 8px;

		&:nth-of-type(1) {
			margin-top: 0;
		}

		.dtl {
			&__l {
				margin-right: 5px;
			}
		}
	}
}

</style>
