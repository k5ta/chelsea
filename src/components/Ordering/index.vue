<template>
  <transition @enter="orderingFormEnterAnimation" @leave="orderingFormLeaveAnimation">
    <div :class="s.orderingBlock">
      <button :class="s.buttonCloseUnvisible" @click="hide"></button>
      <div :class="s.orderingForm">
        <button type="button" :class="s.buttonClose" @click="hide">
          <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
            <use :xlink:href="assets.close"></use>
          </svg>
        </button>
        <p :class="s.information">Приобрести сертификат Вы можете по адресу <span :class="s.boldAddress">Москва, пр. Аэропорта, дом 8 стр. 3</span>, ежедневно с 11:00 до 22:00</p>
        <button type="button" :class="s.buttonShowMap" @click="showMap">
          <svg height="12" width="40"> 
            <use :xlink:href="assets.address"></use> 
          </svg>Посмотреть на карте<svg height="5" width="40"> 
            <use :xlink:href="assets.vector"></use> 
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>