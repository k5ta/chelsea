<template>
  <transition @enter="enterAnimation" @leave="leaveAnimation" @appear="appearAnimation">
    <div :class="s.section2" :data-name="name">
      <enroll-site-block ref="block" v-if="enroll" @hide="hideSiteBlock"></enroll-site-block>
      <div :class="[s.bigCol, s.left]" >
        <button :class="s.buttonGetBarbered" @click="showSiteBlock">
          Записаться онлайн
          <svg aria-hidden="true" height="5" width="40" xmlns="http://www.w3.org/2000/svg">
            <use :xlink:href="assets.vector"></use>
          </svg>
        </button>
      </div>
      <div :class="[s.bigCol, s.right]">
        <div :class="s.info">
          <h1 :class="s.upper">О барбершопе</h1>
          <p :class="s.description" v-if="about" id="about">{{ about }}</p>
        </div>
        <div :class="s.vid">
          <iframe width="100%" height="100%" :src="video" frameborder="0" allowfullscreen></iframe>
        </div>
        <div :class="s.forSmall">
          <button :class="s.buttonGetBarbered" @click="showSiteBlock">
            Записаться онлайн
            <svg aria-hidden="true" height="5" width="40" xmlns="http://www.w3.org/2000/svg">
              <use :xlink:href="assets.vector"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>
