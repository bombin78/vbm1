<template>
  <header class="header">
  	<div class="header__block">
  		<div class="header__block-control control-panel">
            <nuxt-link no-prefetch class="control-panel__logo" to="/">
              <b>{{nameCompany}}</b>
            </nuxt-link>
  			<!-- главное меню -->
        <nav class="control-panel__menu menu">
          <ul class = "menu__list">
            <li class = "menu__item">
              <nuxt-link no-prefetch exact active-class="_active" class="menu__link" to="/">
                Главная
              </nuxt-link>
            </li>
            <li class = "menu__item">
              <nuxt-link no-prefetch active-class="_active" class="menu__link" to="/o-kompanii">
                О компании
              </nuxt-link>
            </li>
            <li class = "menu__item">
              <nuxt-link no-prefetch active-class="_active" class="menu__link" to="/documenty">
                Документы
              </nuxt-link>
            </li>
            <li class = "menu__item _end">
              <nuxt-link no-prefetch active-class="_active" class="menu__link" to="/kontakty">
                Контакты
              </nuxt-link>
            </li>
          </ul>
        </nav>
  			<!-- /главное меню -->
  		</div>
  	</div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      nameCompany: 'ООО "ВИБРОБУРМАШ"',
    };
  },
}
</script>
