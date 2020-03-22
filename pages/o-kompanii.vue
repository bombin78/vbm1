<template>
	<section class="page">

		<h2 class="page__content-title content-title">О компании</h2>

		<p class="page__text">
			Наша организация занимается разработкой, изготовлением и ремонтом специальных машин
			на железнодорожном ходу и сменным навесным  оборудованием  к ним.
			Мы выпускаем комплексы  на автомобильном ходу, предназначенные для строительства
			сетей энергоснабжения и электрификации железных дорог, промышленного и
			гражданского строительства. Кроме того, компания занимается предоставлением
			услуг по аренде, продаже ранее эксплуатируемой ж.д. техники.
		</p>

		<dl class="page__dtl dtl">
			<dt class="dtl__l">ООО "Вибробурмаш" готово предложить свои новые разработки:</dt>
			<dd class="dtl__v">
				<ul class="dtl__list">
					<li class="dtl__item">
						подвижную железнодорожную установку МС-1г.2 для вибропогружения свай и свайных фундаментов опор
						контактной сети;
					</li>
					<li class="dtl__item">
						комплекс МВС-1 для вибропогружения свайных фундаментов опор контактной
						сети и свай на базе автомобиля "УРАЛ-4320-1968-40";
					</li>
					<li class="dtl__item">
						краноманипуляторную установку на платформе 13-4012;
					</li>
					<li class="dtl__item">
						бурильное и пневмоударное буровое оборудование к машинам МС;
					</li>
					<li class="dtl__item">
						сменное оборудование к машинам МС для установки металлических винтовых
						свайных фундаментов опор контактной сети.
					</li>
				</ul>
			</dd>
		</dl>

		<table class="page__photo-ms1g2-1 table-photo blueimp-links">
			<tr class="table-photo__row">
				<td class="table-photo__cell">
					<a class="table-photo__cell-link" href="/images/about-company/big/ms1g2_1.jpg" title="Машина МС-1Г.2 - испытание">
						<img class="table-photo__cell-img" src="/images/about-company/ms1g2_1.jpg" alt="Машина МС-1Г.2 - испытание">
					</a>
				</td>
				<td class="table-photo__cell">
					<a class="table-photo__cell-link" href="/images/about-company/big/ms1g2_2.jpg" title="Машина на железнодорожном ходу для вибропогружения железобетонных свай и фундаментов опор контактной сети">
						<img class="table-photo__cell-img" src="/images/about-company/ms1g2_2.jpg" alt="Машина на железнодорожном ходу для вибропогружения железобетонных свай и фундаментов опор контактной сети">
					</a>
				</td>
			</tr>
		</table>

		<p class="page__text">
			Предприятие осуществляет все виды ремонтов железно-дорожной техники – спец.машин
			АВФ-1, АВФ-1М.2, МС-1, МС-1м и рабочих органов к ним, сменного оборудования к машинам МС,
			а также дрезин АДМ и ж/д кранов типа КЖ, КЖС, КЖДЭ.
		</p>

		<table class="page__photo-adm-mpt table-photo blueimp-links">
			<tr class="table-photo__row">
				<td class="table-photo__cell">
					<a class="table-photo__cell-link" href="/images/about-company/big/adm.JPG" title="После ремонта - автомотриса АДМ">
						<img class="table-photo__cell-img" src="/images/about-company/adm.JPG" alt="После ремонта - автомотриса АДМ">
					</a>
				</td>
				<td class="table-photo__cell">
					<a class="table-photo__cell-link" href="/images/about-company/big/mpt.JPG" title="После ремонта - автомотриса МПТ">
						<img class="table-photo__cell-img" src="/images/about-company/mpt.JPG" alt="После ремонта - автомотриса МПТ">
					</a>
				</td>
			</tr>
		</table>

		<p class="page__text">
			Наша техника и оборудование успешно работает на железных дорогах России и во многих
			строительных организациях, занимающихся работами по ремонту сетей энергоснабжения и
			электрификации стальных магистралей.
		</p>

		<p class="page__text">
			В число основополагающих принципов предприятия входит высокое качество производимых работ,
			выполнение заказов в установленные сроки.
		</p>

		<p class="page__text">
			Цена на нашу продукцию договорная.
		</p>

	</section>

</template>

<script>
export default {
	head: {
	  title: 'О компании',
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
	}

	.dtl {
		&__list {
			padding-left: 25px;
		}

		&__item {
			position: relative;
			margin-top: 5px;

			&:before {
				content: '-';
				position: absolute;
				top: 0;
				left: -12px;
			}
		}
	}

	&__photo-ms1g2-1.table-photo {

		.table-photo__cell:nth-of-type(1) {
			width: 70.35%;
			.table-photo__cell-link {
				margin-left: 37px;
			}
		}

		.table-photo__cell:nth-of-type(2) {
			width: 29.65%;
			.table-photo__cell-link {
				margin-left: 7px;
			}
		}
	}
}

</style>
