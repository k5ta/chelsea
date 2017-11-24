<template>
  <transition @enter="enterAnimation" @leave="leaveAnimation" @appear="appearAnimation">
    <div :class="s.root" :data-name="name">
      <enroll-site-block v-if="enroll" @hide="hideSiteBlock"></enroll-site-block>
      <div :class="s.barberImg" id="barberImg">
        <video :class="s.barberVideo" autoplay loop>
          <source :src="assets.smoke_webm" type="video/webm"/>
          <source :src="assets.smoke_mp4" type="video/mp4"/>
        </video>
        <div :class="s.barberContainer">
          <img :class="s.image" :src="assets.barber">
        </div>
      </div>
      <div :class="s.verticalCenterContent">
        <div :class="s.content">
          <h1 :class="s.headline">Барбершоп Chelsea</h1>
          <h2 v-if="contactData" :class="s.address"><svg height="20" width="30" aria-hidden="true">
              <use :xlink:href="assets.address"></use>
            </svg>{{contactData.city}}, {{contactData.street}}</h2>
        </div>
        <button :class="s.button" type="button" @click="showSiteBlock">
          Записаться онлайн
          <svg height="5" width="40" aria-hidden="true">
            <use :xlink:href="assets.vector"></use>
          </svg>
        </button>
      </div>
      <div :class="s.apps">
        <a v-if="appsLinks" :href="appsLinks.appStore" target="_blank">
          <img :src="assets.appStore" alt="App Store">
        </a>
        <a v-if="appsLinks" :href="appsLinks.googlePlay" target="_blank">
          <img :src="assets.googlePlay" alt="Google Play">
        </a>
      </div>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>
