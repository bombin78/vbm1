<template>
    <div class="theme-bar">
        <div id="slider" class="nivo-slider">
            <img
              :src="`/${item.url}`"
              :data-thumb="`/${item.url}`"
              :alt="item.title"
              :title="item.title"
              v-for="item of list"
              :key="item.id">
        </div>
    </div>
</template>

<script>
export default {
  mounted () {
    this.$initNivoSlider();
  },
  data() {
    return {
      list: [
        {
          id: 1,
          title: 'Работаем более 6-ти лет. Имеем производственные мощности, персонал и техническую документацию на выполняемые работы.',
          url: 'images/main/img1_2.jpg',
        },
        {
          id: 2,
          title: 'Выполням текущий, средний и капитальный ремонты дрезин ДГку, автомотрис АДМ, мотовозов МПТ, ж.д.кранов КЖ, КЖС, КЖДЭ.',
          url: 'images/main/img2_2.jpg',
        },
        {
          id: 3,
          title: 'Обеспечиваем высокое качество ремонтных работ в установленные сроки. Имеем возможность выполнять модернизацию.',
          url: 'images/main/img3_2.jpg',
        },
      ],
    };
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/vendors/_nivo-slider.scss';
</style>
