<template>
  <section class="page">

    <h2 class="page__content-title content-title">Контакты</h2>

    <h3 class="page__title">Общество с ограниченной ответственностью «Вибробурмашина»</h3>

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

    <dl class="page__dtl dtl">
        <dt class="dtl__l">Юр.адрес:</dt>
        <dd class="dtl__v">171075, Тверская обл., Бологовский район, г.Бологое, ул.Кирпичная, д.1А., оф.1.</dd>
    </dl>

    <dl class="page__dtl dtl">
        <dt class="dtl__l">Факт.адрес:</dt>
        <dd class="dtl__v">171075, Тверская обл., Бологовский район, г.Бологое, ул.Кирпичная, д.1А., оф.1.</dd>
    </dl>

    <dl class="page__dtl dtl">
        <dt class="dtl__l">ИНН:</dt>
        <dd class="dtl__v">6908018170</dd>
    </dl>

    <dl class="page__dtl dtl">
        <dt class="dtl__l">ОГРН:</dt>
        <dd class="dtl__v">1196952001180</dd>
    </dl>

    <dl class="page__dtl dtl">
        <dt class="dtl__l">Тел:</dt>
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

    <h3 class="page__title">Расположение на карте</h3>

    <div class="page__map">
        <!-- Расположение компании на яндекс карте -->
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Azx4XsME5usvRafl7TBnSG1LV7h32iYB6&amp;width=620&amp;height=280&amp;lang=ru_RU&amp;scroll=true"></script>
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
export default {
  head: {
    title: 'Контакты',
  },
  data() {
    return {
      numPhone: 'Тел.: +7 (920) 151-65-98',
      eMail: 'info@vbm1.ru',
    };
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.page {
	@include main-content();

	&__title {
		margin-top: 20px;
		font-size: $fontSize + 2px;
		font-weight: bold;
	}

	&__company-name.dtl,
	&__dtl.dtl {
		display: flex;
		margin-top: 8px;

		.dtl {
			&__l {
				margin-right: 5px;
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

	&__map {
		margin-top: 5px;
		height: 280px;
		width: 620px;
		border: 2px solid $lightGray;
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
		top: 25px;
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
