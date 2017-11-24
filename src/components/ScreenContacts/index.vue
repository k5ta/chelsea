<template>
  <transition @enter="enterAnimation" @leave="leaveAnimation" @appear="appearAnimation">
    <div :class="s.section">
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
        </div>
      </div>
      <div :class="s.map" id="map">
      </div>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>