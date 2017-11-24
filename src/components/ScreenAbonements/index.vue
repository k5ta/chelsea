<template>
  <transition @enter="enterAnimation" @leave="leaveAnimation" @appear="appearAnimation">
    <div>
      <div :class="s.forVideo">
        <video id="video" :class="s.videoBackground" autoplay muted loop >
          <source :src="assets.video" type="video/mp4"/>
          <source :src="assets.videoWebm" type="video/webm"/>          
        </video>
      </div>
      <div :class="s.section4" :data-name="name">
        <div :class="s.sectionRow" id="sectionRow">
          <ordering-block v-if="ordering" @hide="orderingFormClose"></ordering-block>
          <div :class="s.row">
            <div :class="s.column" ref="first">
              <img :class="s.abonementImg" :src="assets.abonement5" alt="Абонемент на 5 стрижек">
              <h1 :class="s.headtext" v-if="abonements">{{ abonements[0].title }}</h1>
              <p :class="s.price" v-if="abonements">{{ abonements[0].price }} ₽</p>
              <button type="button" :class="s.buttonOrder" @click="orderingFormOpen">Заказать<svg height="8" width="20" xmlns="http://www.w3.org/2000/svg"> 
                  <use :xlink:href="assets.smallVector"></use> 
                </svg>
              </button>
            </div>

            <div :class="s.column" ref="second">
              <img :class="s.abonementImg" :src="assets.sertificate" alt="Подарочный сертификат">
              <h1 :class="s.headtext">Подарочный сертификат</h1>
              <p :class="s.text">Вы можете
                <router-link :class="s.pinkLink" to="/prices">выбрать<svg height="6" width="20" xmlns="http://www.w3.org/2000/svg"> 
                    <use :xlink:href="assets.smallVector"></use> 
                  </svg>
                </router-link>любые виды услуг</p>
              <button type="button" :class="s.buttonOrder" @click="orderingFormOpen">Заказать<svg height="8" width="20" xmlns="http://www.w3.org/2000/svg"> 
                  <use :xlink:href="assets.smallVector"></use> 
                </svg>
              </button>
            </div>

            <div :class="s.column" ref="third">
              <img :class="s.abonementImg" :src="assets.abonement10" alt="Абонемент на 10 стрижек">
              <h1 :class="s.headtext" v-if="abonements">{{ abonements[1].title }}</h1>
              <p :class="s.price" v-if="abonements">{{ abonements[1].price }} ₽</p>
              <button type="button" :class="s.buttonOrder" @click="orderingFormOpen">Заказать<svg height="8" width="20" xmlns="http://www.w3.org/2000/svg"> 
                  <use :xlink:href="assets.smallVector"></use> 
                </svg>
              </button>
            </div>

          </div>
        </div>

        <shop-info-block v-if="shopInfo" @hide="shopInfoClose"></shop-info-block>

        <button type="button" key="firstButton"
          :class="[s.buttonNextAbonements, s.leftButton]" 
          @click="prevAbonement">
          <svg height="30" width="45" :class="s.leftSvg" xmlns="http://www.w3.org/2000/svg"> 
            <use :xlink:href="assets.arrow"></use> 
          </svg>
        </button>
        <button type="button" key="secondButton"
          :class="[s.buttonNextAbonements, s.rightButton]" 
          @click="nextAbonement">
          <svg height="30" width="45" :class="s.rightSvg" xmlns="http://www.w3.org/2000/svg"> 
            <use :xlink:href="assets.arrow"></use> 
          </svg>
        </button>
        
        <div :class="s.shop">
          <div :class="s.shopImg">
            <img :src="assets.shop" alt="Магазин">
          </div>
          <div :class="s.goShop">
            <p :class="s.seeIn">Смотрите больше товаров в нашем магзине</p>
            <router-link to="">
            <button type="button"  
              :class="s.buttonGoShop" 
              @click="shopInfoOpen">В магазин<svg height="5" width="40" xmlns="http://www.w3.org/2000/svg"> 
                <use :xlink:href="assets.vector"></use> 
              </svg>
            </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>
