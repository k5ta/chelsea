<template>
  <transition @enter="siteBlockEnterAnimation" @leave="siteBlockLeaveAnimation">
    <div :class="s.enrollBlock" @click="hide">
      <button type="button" :class="s.buttonClose" @click="hide">
        <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
          <use :xlink:href="assets.close"></use>
        </svg>
      </button>
      <iframe :class="s.enrollSite" src="https://n19278.yclients.com/company:37601?o=">
      </iframe>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>