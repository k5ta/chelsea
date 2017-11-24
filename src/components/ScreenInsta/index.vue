<template>
  <transition @enter="enterAnimation" @leave="leaveAnimation" @appear="appearAnimation">
    <div :class="s.section" :data-name="name">
      <enroll-site-block ref="block" v-if="enroll" @hide="hideSiteBlock"></enroll-site-block>
      <div :class="s.bigCol__left">
        <div :class="s.saleInfo">
          <h1 :class="s.upper">Получи скидку 5% за фото</h1>
          <div :class="s.instaInfo">
            <div :class="s.instaSvg">
              <svg height="100" width="100">
                <use :xlink:href="assets.inst"></use>
              </svg>
            </div>
            <div :class="s.instaAbout">
              <p :class="s.text">Постригся, побрился, сфотографировался, получил 5% скидку. 
                Каждый, кто сделает фото у нас в Chelsea и разместит у себя в Инстаграм, 
                с указанием профиля @barbershop_chelsea, мы даем скидку 5%</p>
              <a v-if="discount" :class="s.pinkLink" :href="discount" target="_blank">Подробнее
                <svg aria-hidden="true" height="10" width="12" xmlns="http://www.w3.org/2000/svg">
                  <use :xlink:href="assets.smallVector"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div :class="s.followUs">
          <h1 :class="s.upper">Следите за нами в instagram</h1>
          <button :class="s.buttonGetBarbered" @click="goInsta">
            Подписаться
            <svg aria-hidden="true" height="5" width="40" xmlns="http://www.w3.org/2000/svg">
              <use :xlink:href="assets.vector"></use>
            </svg>
          </button>
        </div>
      </div>
      <div :class="s.bigCol__right">
        <div :class="s.photos">
          <div :class="s.row">
            <div :class="s.width50">
              <div :class="s.baseImg" ref="ph1"
                :style="`background-image: url('/static/raster/instapage/instapage1.png'); width: calc(100% - 0.66vw); padding-top: 49%`">
              </div>
              <div :class="s.row">
                <div :class="s.baseImg" ref="ph2" :style="`background-image: url('/static/raster/instapage/instapage2.png'); width: 50%; padding-top: 20vh`"></div>
                <div :class="s.baseImg" ref="ph3" :style="`background-image: url('/static/raster/instapage/instapage3.png'); width: 50%; padding-top: 49%`"></div> 
              </div>
            </div>
            <div :class="s.baseImg" ref="ph4" :style="`background-image: url('/static/raster/instapage/instapage4.png'); width: 50%; padding-top: 49%`"></div>
          </div>
          <div :class="s.row">
            <div :class="s.baseImg" ref="ph5" :style="`background-image: url('/static/raster/instapage/instapage5.png'); width: 24.2%; padding-top: 20vh`"></div>
            <div :class="s.baseImg" ref="ph6" :style="`background-image: url('/static/raster/instapage/instapage6.png'); width: calc(50% + 0.33vh); padding-top: 24%`"></div>
            <div :class="s.baseImg" ref="ph7" :style="`background-image: url('/static/raster/instapage/instapage7.png'); width: 25%; padding-top: 24%`"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>
