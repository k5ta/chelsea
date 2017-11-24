<template>
  <transition @enter="enterAnimation" @leave="leaveAnimation">
    <footer :class="s.root">
      <div :class="s.information">
        <div :class="s.phoneAndAddress" v-if="contactData">
          <a :href="contactData.phoneRef" :class="s.phone">{{ contactData.phone }}</a>
          <p :class="s.address">{{ contactData.city }}<br>{{ contactData.street }}</p>
          <div v-if="socLinks">
            <a :class="s.social" v-for="soc in socLinks" :href="soc.ref" :key="soc.name" target="_blank">
              <svg height="24" width="18" xmlns="http://www.w3.org/2000/svg">
                <use :xlink:href="soc.icon"></use>
              </svg>
            </a>
          </div>
        </div>

        <nav :class="s.links">
          <router-link :class="s.anchors" 
            v-for="link in navLinks"
            :to="link.ref"
            :key="link.name"
            :id="'footer_' + link.ref">{{ link.name }}</router-link>
        </nav>

        <div :class="s.apps" v-if="appsLinks">
          <a :href="appsLinks.appStore" target="_blank">
            <img :src="assets.appStore" alt="App Store">
          </a>
          <a :href="appsLinks.googlePlay" target="_blank">
            <img :src="assets.googlePlay" alt="Google Play">
          </a>
        </div>

      </div>
      <div :class="s.bottom">
        <div>
          <router-link to="/" id="footer_logo">
            <svg height="100" width="200" xmlns="http://www.w3.org/2000/svg">
              <use :xlink:href="assets.logo"></use>
            </svg>
          </router-link>
        </div>

        <div :class="s.copyright">
          <p>Copyright © Chelsea</p>
        </div>

        <div :class="s.madeBy">
          <p>Сделано в:</p>
          <a href="http://spacety.ru" target="_blank">
            <svg height="30" width="140" xmlns="http://www.w3.org/2000/svg">
              <use :xlink:href="assets.spacety"></use>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>
