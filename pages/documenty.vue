<template>

	<section class="page">

		<h2 class="page__content-title content-title">Документы</h2>

		<ul class="page__documents-review documents-review blueimp-links">

			<li class="documents-review_list">

				<h3 class="documents-review__title">Патенты, сертификаты и свидетельства</h3>

				<ul class="documents-review__list document-pages">

					<li class="document-pages__item">
						<a
  						class="document-pages__link"
  						href="/images/documents/big/707х1000_patent-192676.jpg"
  						title="Патент: машина для вибропогружения свай и свайных фундаментов опор контактной сети"
  						data-gallery>
							<img
                class="document-pages__img"
                src="/images/documents/195х275_patent-192676.jpg"
                alt="Патент на полезную мадель № 192676">
						</a>
					</li>

					<li class="document-pages__item">
						<a
              class="document-pages__link"
              href="/images/documents/big/707х1000_sert-1.jpg"
              title="Сертификат соответствия"
              data-gallery>
							<img
                class="document-pages__img"
                src="/images/documents/195х275_sert-1.jpg"
                alt="Сертификат соответствия требованиям ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)">
						</a>
					</li>

					<li class="document-pages__item">
						<a
              class="document-pages__link"
              href="/images/documents/big/707х1000_sert-2.jpg"
              title="Свидетельство о присвоении условного номера для клеймения ССПС"
              data-gallery>
							<img
                class="document-pages__img"
                src="/images/documents/195х275_sert-2.jpg"
                alt="Свидетельство № 156/20 от 18.02.2020 о присвоении условного номера 2278 для клеймения ССПС">
						</a>
					</li>

				</ul>

			</li>

		</ul>

	</section>

</template>

<script>
import {SideMenu} from '@/assets/main';

export default {
  head: {
    title: 'Документы',
	meta: [
	  {
		hid: 'description',
		name: 'description',
		content: 'Свидетельство о присвоении условного номера для клеймения ССПС, cертификаты и патенты'
	  }
	],
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
  middleware: ['technical-works'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.page {
	@include main-content();
}

.documents-review {

	&__title {
		padding     : 10px 0;

		font-size   : $fontSize + 2px;
		font-weight : bold;
	}
}

.document-pages {
	display : inline-block;
	margin  : 10px 0;
	width   : 100%;

	&__item {
		float      : left;
		width      : 33.3%;

		text-align : center;
	}

	&__link {
		cursor  : pointer;

		&:hover {
			outline : 2px solid $yellow;
		}
	}
	&__img {
		vertical-align: bottom;
	}
}

</style>
