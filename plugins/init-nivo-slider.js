import Vue from 'vue';

Vue.prototype.$initNivoSlider = () => {
  $(window).load(function () {
		$('#slider').nivoSlider({controlNav: false});
	});
}
