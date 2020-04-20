<template>
  <div class="wrapper">
    <div class="header-container">
      <!-- шапка сайта -->
        <vbm-header />
      <!-- /шапка сайта -->
    </div>
    <div class="content-container">
      <div class="content-container__block">
        <!-- боковая панель -->
          <vbm-sidebar />
        <!-- /боковая панель -->
        <!-- основной контент -->
        <nuxt />
        <!-- /основной контент -->
      </div>
  	</div>
    <div class="footer-container">
      <div class="footer-container__block">
        <!-- подвал сайта-->
          <vbm-footer />
        <!-- /подвал сайта-->
      </div>
    </div>
    <div class="modal-container">
      <!-- модальное окно галереи -->
        <vbm-gallery-modal />
      <!-- /модальное окно галереи-->
    </div>
  </div>
</template>

<script>
import VbmHeader from '@/components/Header';
import VbmSidebar from '@/components/Sidebar';
import VbmFooter from '@/components/Footer';
import VbmGalleryModal from '@/components/GalleryModal';
import {mainMenu} from '@/assets/main';
export default {
  components: {
    VbmHeader,
    VbmSidebar,
    VbmFooter,
    VbmGalleryModal,
  },
  mounted () {
    mainMenu();
  },
}
</script>
