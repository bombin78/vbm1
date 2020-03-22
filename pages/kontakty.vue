<template>
    <section class="page">

    	<h2 class="page__content-title content-title">Контакты и реквизиты</h2>

    	<div class="page__basic basic-info">

    		<h3 class="basic-info__title">Контакты</h3>

    		<div class="basic-info__location location-map">

    			<p class="location-map__text">Расположение на карте:</p>

    			<div class="location-map__img">
    				<!-- Расположение компании на яндекс карте -->
    				<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Azx4XsME5usvRafl7TBnSG1LV7h32iYB6&amp;width=385&amp;height=270&amp;lang=ru_RU&amp;scroll=true"></script>
    			</div>

    		</div>

    		<div class="basic-info__top top-managers">

    			<p class="top-managers__block">
            <span v-html="contactPerson1"></span>
          </p>

    			<p class="top-managers__block">
            <span v-html="contactPerson2"></span>
          </p>

    			<p class="top-managers__block">
    				{{postCode}}<br>
            <span v-html="location"></span><br>
    				{{numPhone1}}<br>
            {{numPhone2}}
    			</p>

    			<p class="top-managers__block">
    				e-mail:
    				<a class="top-managers__mail" :href="eMail">{{eMail}}</a>
    			</p>

    		</div>

    	</div>

    	<div class="page__company company-details">

    		<h3 class="company-details__title">Реквизиты</h3>

    		<p class="company-details__info">
          <span v-html="companyDetails"></span>
        </p>

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
      nameCompany: 'ООО "ВИБРОБУРМАШ"',
      contactPerson1: '<b>Генеральный директор</b><br>Аверин Михаил Борисович',
      contactPerson2: '<b>Главный бухгалтер</b><br>Игнатьева Ирина Владимировна',
      numPhone1: 'Тел.: +7 (920) 151-65-98',
      numPhone2: '',
      eMail: 'info@vbm1.ru',
      postCode: '171076',
      location: 'Тверская обл., г.Бологое,<br>ул.Кирпичная, д.1А., офис.1',
      companyDetails: `ООО «ВИБРОБУРМАШ»<br>
				ИНН 6908018170; КПП 690801001<br>
				Юр.адрес: 1171075, Тверская обл., Бологовский район, г.Бологое, ул.Кирпичная, д.1А., оф.1.<br>
				Факт.адрес: 171075, Тверская обл., Бологовский район, г Бологое, ул.Кирпичная, д.1А., оф.1.<br>
				Р/с 40702810763000009104,к/с 30101810700000000679, БИК 042809679<br>
				В ТВЕРСКОM ОТДЕЛЕНИИ N8607 ПАО СБЕРБАНК<br>
				ОГРН 1196952001180; ОКПО 35737501; ОКОГУ 4210014; ОКАТО 28408000000;<br>
				ОКТМО 28608101001; ОКОПФ 12300; ОКВЭД 28.92; 77.39.12; 77.12; 77.11; 30.20`,
    };
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.page {
	@include main-content();
}

.basic-info {
	display : inline-block;

	&__title {
		margin-top  : 5px;

		font-size   : $fontSize + 2px;
		font-weight : bold;
	}

	&__location.location-map,
	&__top.top-managers {
		float      : left;
		margin-top : 15px;
	}
}

.location-map {
	width : 413px;
	&__text {
	}
	&__img {
		margin-top : 5px;
		height     : 270px;
		width      : 385px;

		border     : 2px solid $lightGray;
	}
}

.top-managers {
	width : 206px;

	&__block {
		margin-top : 20px;

		&:first-child {
			margin-top : 22px;
		}
	}

	&__mail {
		color : $darkBlue;
		&:hover {
			text-decoration : underline;
		}
	}
}

.company-details {
	margin-top : 20px;

	border-top: 1px solid $middleGray;

	&__title {
		margin-top : 5px;

		font-size   : $fontSize + 2px;
		font-weight : bold;
	}

	&__info {
		margin-top  : 8px;
		line-height : 1.5;
	}
}

</style>
