<template>
  <footer class="footer">
  	<div class="footer__company">
      <span v-html="copyright"></span>&nbsp;&nbsp;
      {{nameCompany}}<br>e-mail: {{eMail}}
    </div>
    <div class="footer__location">
      <span v-html="location"></span>
    </div>
    <div class="footer__phones">
      {{numPhone1}}<br>
      {{numPhone2}}
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      nameCompany: 'ООО "ВИБРОБУРМАШ"',
      numPhone1: 'Тел.: +7 (920) 151-65-98',
      numPhone2: '',
      eMail: 'info@vbm1.ru',
      location: 'Тверская обл., г.Бологое,<br>ул.Кирпичная, д.1А., офис.1',
      copyright: '&copy; 2020',
    };
  },
}
</script>
