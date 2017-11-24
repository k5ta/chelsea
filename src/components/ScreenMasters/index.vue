<template>
  <transition @enter="enterAnimation" @leave="leaveAnimation" @appear="appearAnimation">
    <div :class="s.section5" :data-name="name">
      <enroll-site-block ref="block" v-if="enroll" @hide="hideSiteBlock"></enroll-site-block>
      <transition @enter="barbersEnterAnimation" @leave="barbersLeaveAnimation" mode="out-in">
        <div :class="s.row" :key="page">
          <div :class="s.widePlace"><h1 :class="s.choose">Выбери своего барбера</h1></div>
          <div :class="[s.widePlace, s.mobileButtons]">
            <button type="button" key="firstButton"
              v-if="moreBarbers"
              :class="[s.buttonNextBarbers, s.leftButton]" 
              @click="prevPage">
              <svg height="30" width="45" :class="s.leftSvg" xmlns="http://www.w3.org/2000/svg"> 
                <use :xlink:href="assets.arrow"></use> 
              </svg>
            </button>
            <button type="button" key="secondButton"
              v-if="moreBarbers"
              :class="[s.buttonNextBarbers, s.rightButton]" 
              @click="nextPage">
              <svg height="30" width="45" :class="s.rightSvg" xmlns="http://www.w3.org/2000/svg"> 
                <use :xlink:href="assets.arrow"></use> 
              </svg>
            </button>
          </div>
          <div :class="s.column" v-for="master in currentRow" :key="master.img">
            <div :class="s.photo" name="photo">
              <video :class="s.barberVideo" autoplay loop>
                <source :src="assets.smoke_webm" type="video/webm"/>
                <source :src="assets.smoke_mp4" type="video/mp4"/>
              </video>
              <div name="barber" :class="s.barber">
                <img :src="`static/raster/barbers/${master.img}`" :alt="master.name">
              </div>
            </div>
            <h1 :class="s.barberName">{{ master.name }}</h1>
            <button :class="s.buttonGetBarbered" @click="showSiteBlock(master.enrollSite)">
              Записаться
              <svg aria-hidden="true" height="5" width="40" xmlns="http://www.w3.org/2000/svg">
                <use :xlink:href="assets.vector"></use>
              </svg>
            </button>
            <p :class="s.hiddenText">{{ master.description }}<br>
              <br>
              <a :class="s.social" v-for="soc in master.socLinks" :href="soc.ref" :key="soc.name" target="_blank">
                <svg height="16" width="20" xmlns="http://www.w3.org/2000/svg"> 
                  <use :xlink:href="assets[soc.img]"></use> 
                </svg>
              </a>
            </p>
          </div>
        </div>
      </transition>

      <div :class="[s.widePlace, s.buttons]">
        <button type="button" key="firstButton"
          v-if="moreBarbers"
          :class="[s.buttonNextBarbers, s.leftButton]" 
          @click="prevPage">
          <svg height="30" width="45" :class="s.leftSvg" xmlns="http://www.w3.org/2000/svg"> 
            <use :xlink:href="assets.arrow"></use> 
          </svg>
        </button>
        <button type="button" key="secondButton"
          v-if="moreBarbers"
          :class="[s.buttonNextBarbers, s.rightButton]" 
          @click="nextPage">
          <svg height="30" width="45" :class="s.rightSvg" xmlns="http://www.w3.org/2000/svg"> 
            <use :xlink:href="assets.arrow"></use> 
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>
