<template>
  <transition name="menu" mode="out-in">
    <div v-if="showMenu" :class="s.dropdown">
      <button type="button" :class="s.closeMenu" @click="closeMenu">
        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
          <use :xlink:href="assets.close"></use>
        </svg>
      </button>
      <nav :class="s.navigation">
        <router-link :class="s.dropdownAnchor"
          v-for="link in navLinks" :to="link.ref" :id="'collapse_' + link.ref" :key="link.name">{{ link.name }}
        </router-link>
      </nav>
      <a v-if="contactData" :href="contactData.phoneRef" :class="s.phone">{{ contactData.phone }}</a>
      <p :class="s.time" v-if="contactData">
        <svg height="14" width="20" xmlns="http://www.w3.org/2000/svg">
          <use :xlink:href="assets.clock"></use>
        </svg> {{ contactData.time }}</p>
      <enroll-site-block v-if="enroll" @hide="hideSiteBlock"></enroll-site-block>
      <button type="button" 
      :class="s.buttonGetBarbered" 
      @click="showSiteBlock">Записаться онлайн<svg height="5" width="40" xmlns="http://www.w3.org/2000/svg">
          <use :xlink:href="assets.vector"></use>
        </svg>
      </button>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>
