<template>
  <transition @enter="enterAnimation" @leave="leaveAnimation">
    <section v-if="contactData" :class="s.contacts">
      <div :class="s.content">
        <div :class="s.contactInformation" v-if="contactData">
          <h1 :class="s.srOnly">Контакты</h1>
          <address>
            <span :class="s.city">{{ contactData.city }}</span><br>
            <span :class="s.street">{{ contactData.street}}</span>
          </address>
          <a :class="s.phone" :href="contactData.phoneRef">{{ contactData.phone }}</a>
          <div>
            <a :class="s.email" :href="contactData.mailRef">
              <svg height="10" width="17"> 
                <use :xlink:href="assets.mail"></use> 
              </svg> {{ contactData.mail }}</a>
            <div :class="[s.time, s.boldText]">
              <svg height="12" width="17"> 
                <use :xlink:href="assets.clock"></use> 
              </svg> Время работы</div>
            <div :class="[s.time, s.regularText]">     {{ contactData.time }}</div>
          </div>
          <button type="button" :class="s.buttonShowMap" @click="showMap">
            <svg height="12" width="40"> 
              <use :xlink:href="assets.address"></use> 
            </svg>Посмотреть на карте<svg height="5" width="40"> 
              <use :xlink:href="assets.vector"></use> 
            </svg>
          </button>
        </div>
      </div>
      <button type="button" :class="s.buttonClose" @click="goBack">
        <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
          <use :xlink:href="assets.close"></use>
        </svg>
      </button>
      <button :class="s.otherPage" @click="goBack"></button>
    </section>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>