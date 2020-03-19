<template>
  <aside class="sidebar-container">
	   <div class="sidebar-container__block sidebar">
      <h2 class = "sidebar__title">Разделы</h2>
      <ul class = "sidebar__sidebar-menu sidebar-menu">
        <li
          class = "sidebar-menu__item"
          v-for="item of list"
          :key="item.id">

          <div class = "sidebar-menu__block-link">
            <nuxt-link
              no-prefetch
              active-class="_active"
              class="sidebar-menu__link"
              to="`/${item.name}`">
              {{item.title}}
            </nuxt-link>
          </div>

        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 10,
          title: 'Изготовление новых машин МС-1Г.2',
          name: 'izgotovlenie-novykh-mashin-ms-1g2',
        },
        {
          id: 11,
          title: 'Изготовление навесного оборудования',
          name: 'izgotovlenie-navesnogo-oborudovaniya',
        },
        {
          id: 12,
          title: 'Изготовление запасных частей',
          name: 'izgotovlenie-zapasnykh-chastej',
        },
        {
          id: 13,
          title: 'Ремонт ж.д.техники: МС, АВФ, АДМ, ж.д.кранов',
          name: 'remont-zdtekhniki',
        },
        {
          id: 14,
          title: 'Аренда ж.д.техники с экипажом и без него',
          name: 'arenda-zdtekhniki',
        },
        {
          id: 15,
          title: 'Продажа б/у железнодорожной техники',
          name: 'prodazha-zdtekhniki',
        },
      ],
    };
  },
}
</script>
